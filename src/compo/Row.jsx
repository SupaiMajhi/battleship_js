import Col from "./Col";

function Row({ g, className="" }) {
    return (
        <div className={`${className} flex justify-center items-center border-b`}>
            {g.map((c, i) => (
                <Col key={i} className={i === 0 ? "border-l" : ""} />
            ))}
        </div>
    )
}

export default Row;