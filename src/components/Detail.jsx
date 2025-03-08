const Detail = ({ q, a }) => {
  return (
    <details className="w-full space-y-2 border-b border-black/50 py-2 text-start">
      <summary className="items flex list-none items-center justify-between gap-2">
        <p className="text-xl font-semibold">Q: {q}</p>
        <img src="/icons/arrow.svg" alt="Down Arrow" width={32} />
      </summary>
      <ul className="list-disc pl-4">
        <li>{a}</li>
      </ul>
    </details>
  );
};

export default Detail;
