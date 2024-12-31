import React from "react";
import { useCustomization } from "../contexts/Customization";

const Configurator = () => {
    const { material, setMaterial, legs, setLegs, chairColors,
        chairColor,
        setChairColor,
        cushionColors, } = useCustomization();

    return (
        <div className="configurator">
            <div className="configurator_section">
                <div className="configurator_section_title">Chair material</div>
                <div className="configurator_section_values">
                    <div className={`item ${material === "leather" ? "item--active" : ""}`}
                        onClick={() => setMaterial("leather")}
                    >
                        <div className="item_label">Leather</div>
                    </div>
                    <div className={`item ${material === "fabric" ? "item--active" : ""}`}
                        onClick={() => setMaterial("fabric")}>
                        <div className="item_label">Fabric</div>
                    </div>
                </div>

            </div>
            <div className="configurator_section">
                <div className="configurator_section_title">Chair color</div>
                <div className="configurator_section_values">
                    {chairColors.map((item, index) => (
                        <div
                            key={index}
                            className={`item ${item.color === chairColor.color ? "item--active" : ""
                                }`}
                            onClick={() => setChairColor(item)}
                        >
                            <div
                                className="item_dot"
                                style={{ backgroundColor: item.color }}
                            />
                            <div className="item_label">{item.name}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="configurator_section">
                <div className="configurator_section_title">Legs</div>
                <div className="configurator_section_values">
                    <div
                        className={`item ${legs === 1 ? "item--active" : ""}`}
                        onClick={() => setLegs(1)}
                    >
                        <div className="item_label">Design</div>
                    </div>
                    <div
                        className={`item ${legs === 2 ? "item--active" : ""}`}
                        onClick={() => setLegs(2)}
                    >
                        <div className="item_label">Classic</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Configurator;