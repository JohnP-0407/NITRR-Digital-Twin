export default function ErrorState({ message, onRetry }) {
  return (
    <div role="alert" className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
      <p className="text-[#9d422b]">{message}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="font-semibold text-[#164e45] underline decoration-[#d26b42] underline-offset-4 hover:text-[#0c3932]"
        >
          Try again
        </button>
      )}
    </div>
  );
}