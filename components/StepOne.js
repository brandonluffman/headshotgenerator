export default function StepOne({ onNextStep, onPrevStep }) {
    return (
        <div>
            <h2>Step 1</h2>
            {/* Your form fields for step 1 */}
            <button onClick={onPrevStep}>Previous</button>
            <button onClick={onNextStep}>Next</button>
        </div>
    );
}