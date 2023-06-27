import "./state.css"

const State = ({text, icon}) => (
    <div className="estado">
        <div className="e-2">
            <p>{text}</p>
            {icon}
        </div>
    </div>
)

export default State