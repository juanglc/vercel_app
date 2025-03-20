import React, { useState } from 'react';
import images from './diagramImages';

const Menu: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div>
            <div className="button-menu">
                {Object.keys(images).map((key) => (
                    <button key={key} onClick={() => setSelectedImage(images[key])}>
                        {key}
                    </button>
                ))}
            </div>
            {selectedImage && (
                <div className="image-container">
                    <img src={selectedImage} alt="Diagrama" />
                </div>
            )}
        </div>
    );
};

export default Menu;