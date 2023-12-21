function Card(props) {
    const { title, backgroundColor, children } = props;

    return (
        <div style={{
            margin: 10,
            padding: 10,
            borderRadius: 5,
            backgroundColor: backgroundColor || "white",
        }}>
            {title && <h1>{title}</h1>}
            {children}
        </div>
    );
}
export default Card;