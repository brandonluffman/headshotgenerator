export default function ProgressBar({ currentStep, totalSteps }) {
    const progress = (currentStep / totalSteps) * 100;
    
    return (
        <div style={{ width: '100%', backgroundColor: '#ddd' }}>
            <div style={{ width: `${progress}%`, backgroundColor: 'blue', height: '10px' }}></div>
        </div>
    );
}