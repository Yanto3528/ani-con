'use server';

import { signIn } from '@/lib/auth';
import { ActionState } from '@/types/actions.types';
import { LoginFormValues } from '@/types/form.types';

export async function signInAction(data: LoginFormValues): Promise<ActionState> {
  try {
    await signIn('credentials', {
      email: data.email,
      password: data.password,
    });
    return {
      status: 'success',
      message: 'Successfully login',
    };
  } catch (error) {
    return {
      status: 'error',
      message: 'Invalid credentials',
      errors: [],
    };
  }
}
