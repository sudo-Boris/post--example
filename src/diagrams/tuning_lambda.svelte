<script>
    const len = 4;
    let allowedValues = [1e-4, 10, 100, 10000, 1000000];
    let count = 1e-4;
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
        src="videos/lambda_{count}_ts_100000.mov"
        alt="Interactive plot displaying the effect of tuning the lambda parameter."
    />
    <div style="text-align:center;">
        <p><d-math>\lambda</d-math> = {count}</p>
        <input type="range" min="0" max={len} value="0" on:input={input} />
        <p style="transition: 1s opacity; {hasInteracted && 'opacity: 0;'}">
            Move the slider to change <d-math>\lambda</d-math>!
        </p>
    </div>
</div>
