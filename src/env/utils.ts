export const stripUnderlines = (text: string) => {
  return text.replace(/_/g, '');
};

export const replaceSlashesWithHyphens = (text: string) => {
  return text.replace(/\//g, '-');
};

const refactorTextForVercel = (text: string) => {
  return replaceSlashesWithHyphens(stripUnderlines(text));
};

export const resolveAppUrl = () => {
  if (
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' ||
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
  ) {
    if (
      !!process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG &&
      !!process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF &&
      !!process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER
    ) {
      const gitRepoSlug = refactorTextForVercel(
        process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG || '',
      );
      const branch = refactorTextForVercel(
        process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || '',
      );
      const repoOwner = refactorTextForVercel(
        process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER || '',
      );
      return `https://${gitRepoSlug}-git-${branch}-${repoOwner}.vercel.app`;
    }
  } else if (
    !process.env.NEXT_PUBLIC_VERCEL_ENV ||
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'development'
  ) {
    return 'https://localhost:3001';
  }

  return 'https://localhost:3001';
};
