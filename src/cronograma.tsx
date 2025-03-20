// src/cronograma.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import cronogramaMarkdown from './cronograma_scrum';

const Cronograma: React.FC = () => {
    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Cronograma de Actividades</h1>
            <ReactMarkdown>{cronogramaMarkdown}</ReactMarkdown>
        </div>
    );
};

export default Cronograma;