export default function Head() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return (
    <>
      <link rel="icon" href={`${base}/favicon.ico`} />
      <link rel="icon" type="image/svg+xml" href={`${base}/favicon.svg`} />
    </>
  );
}
