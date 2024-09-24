type ContentRowProps = {
    children: React.ReactNode;
    alignItems?: "row-center" | "row-between" | "row-end";
};

export default function ContentRow({ children, alignItems }: ContentRowProps) {
    const getStyles = () => {
        switch (alignItems) {
            case "row-center":
                return "items-center justify-center gap-4";
            case "row-between":
                return "items-center justify-between";
            case "row-end":
                return "items-center justify-end gap-4";
            default:
                return "flex-col gap-4";
        }
    };
    return (
        <div className={`w-full flex px-4 py-4 ${getStyles()}`}>{children}</div>
    );
}
