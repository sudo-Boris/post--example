<script>
    const len = 4;
    let allowedValues = ["RCPPO", 0, 0.00001, 10, 100];
    let count = "RCPPO";
    let hasInteracted = false;
    // function for updating count on input
    function input(x) {
        if (!hasInteracted) {
            hasInteracted = true;
        }

        count = allowedValues[parseInt(x.target.value)];
    }
</script>

<div style="display: flex; flex-direction: column; align-items: center;">
    <img
        src="videos/exp_{count}.mov"
        alt="Interactive plot displaying the trained agents with a learned lambda and reward shaping."
    />
    <div style="text-align:center;">
        <p><d-math>\lambda</d-math> = {count}</p>
        <input type="range" min="0" max={len} value="0" on:input={input} />
        <p style="transition: 1s opacity; {hasInteracted && 'opacity: 0;'}">
            Move the slider to change <d-math>\lambda</d-math>!
        </p>
    </div>
</div>
