export default function LoadingState({ label = "Loading..." }) {
  return (
    <p role="status" className="flex items-center gap-3 text-sm text-[#63736d]">
      <span
        aria-hidden="true"
        className="size-4 animate-spin rounded-full border-2 border-[#c9d5cf] border-t-[#164e45]"
      />
      {label}
    </p>
  );
}