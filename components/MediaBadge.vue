<template lang="html">
    <div class="media-badge">
        <div class="floating-highlight" />
        <div class="badge-content">
            <slot class="badge-content-item" />
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.media-badge {
    --badge-width: 268.57px;
    --badge-height: 61.16px;
    --accent-slope: 2.35;
    --background-color: var(--color-white);
    --accent-color: var(--color-visit-fushia-03);

    position: absolute;
    width: var(--badge-width);
    height: var(--badge-height);
    right: 0px;
    bottom: 0px;


    .badge-content {
        @include button;

        width: 100%;
        height: 100%;
    
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        --color: var(--color-primary-blue-03);
        color: var(--color);
        stroke: var(--color);
        background-color: var(--background-color);

        --diagonal-width: calc(var(--badge-height) / var(--accent-slope));
        clip-path: polygon(
            0% 100%,
            var(--diagonal-width) 0%,
            100% 0%,
            100% 100%,
            0% 100%,
        );
    }

    .floating-highlight {
        position: absolute;
        width: var(--badge-width);
        height: var(--badge-height);
        top: -6px;
        left: -8px;

        background: var(--accent-color);

        --diagonal-width: calc(var(--badge-height) / var(--accent-slope));
        clip-path: polygon(
            0% 100%,
            0% calc(100% - 1.5px),
            var(--diagonal-width) 0%,
            100% 0%,
            100% 1.5px,
            calc(var(--diagonal-width) + 1px) 1.5px,
            1px 100%,
        );
    }
}
</style>
