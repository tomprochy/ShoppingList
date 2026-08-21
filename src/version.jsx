export default function VersionInfo() {
  const version = import.meta.env.VITE_APP_VERSION;
  const commit = import.meta.env.VITE_GIT_COMMIT?.substring(0, 7);
  const buildDate = import.meta.env.VITE_BUILD_DATE;

  return (
    <small>
      v{version} · {commit} · {buildDate}
    </small>
  );
}