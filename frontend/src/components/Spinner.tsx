/**
 * Example:
 * <SpinnerTS dashed />
 */

export default function Spinner({
    closed,
    dashed,
}: {
    closed?: boolean;
    dashed?: boolean;
}) {
    return (
        <>
            <div
                className={`relative z-20 h-16 w-16 animate-spin rounded-full border-t-2 border-l-2 border-gray-400 ${dashed ? "border-dashed" : ""
                    }`}
            />
            {closed ? (
                <div className="absolute z-10 h-16 w-16 rounded-full border-2 border-gray-200" />
            ) : null}
        </>
    );
}
