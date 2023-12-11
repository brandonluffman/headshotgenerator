export default function StepTwo({ onNextStep, onPrevStep }) {
    return (
        <div>
            <h2>Step 2</h2>
            {/* Your form fields for step 1 */}
            <button onClick={onPrevStep}>Previous</button>
            <button onClick={onNextStep}>Next</button>
        </div>
    );
}
