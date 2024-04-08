'use server';

import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';

import { paths } from '@/constants/paths.constants';
import { signIn } from '@/lib/auth';
import { db } from '@/lib/db';
import { ActionState } from '@/types/actions.types';
import { LoginFormValues, RegisterFormValues } from '@/types/form.types';

export async function signInAction(data: LoginFormValues): Promise<ActionState> {
  try {
    await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    });
  } catch (error) {
    return {
      status: 'error',
      message: 'Invalid credentials',
      errors: [],
    };
  }

  redirect(paths.main.app());
}

export async function registerAction(data: RegisterFormValues): Promise<ActionState> {
  try {
    const existingUser = await db.user.findUnique({
      where: { email: data.email },
    });
    if (existingUser) {
      return {
        status: 'error',
        message: 'User with this email already exists.',
        errors: [],
      };
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    await db.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
      },
    });
    await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Something went wrong';
    return {
      status: 'error',
      message: errorMessage,
      errors: [],
    };
  }

  redirect(paths.main.app());
}
