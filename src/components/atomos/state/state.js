import "./state.css"

const State = ({text, icon, type}) => (
    <div className="estado">
        <div className="e-1">
            <p>{type}</p>
        </div>
        <div className="e-2">
            <p>{text}</p>
            {icon}
        </div>
    </div>
)

export default State