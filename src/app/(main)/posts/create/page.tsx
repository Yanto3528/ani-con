import { PageBody } from '@/components/common/PageBody/PageBody';
import { PageHeader } from '@/components/common/PageHeader';
import { PostForm } from '@/components/posts/PostForm';

export default function PostCreatePage() {
  return (
    <div>
      <PageHeader>
        <h1>Create post</h1>
      </PageHeader>
      <PageBody>
        <PostForm />
      </PageBody>
    </div>
  );
}
