import React from "react";
import { useCustomization } from "../contexts/Customization";

const Configurator = () => {
    const { material, setMaterial } = useCustomization();
    console.log(material);
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
        </div>
    );
}
export default Configurator;