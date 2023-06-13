import "./menu.css"

const MenuComponent = ({array}) => (
    <div class="menu">
            <div class="items-container">
                {array.map((item, index) => (
                <div className="menu-item" key={index}>
                    <p>{item}</p>
                </div>
                ))}
            </div>
    </div>
)

export default MenuComponent
