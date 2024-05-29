export default function Section({title, children, ...Props}) {
    console.log("run or not?");
    return (
        <section{...Props}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}