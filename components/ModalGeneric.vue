<template lang="html">
    <div class="modal-backdrop">
        <div class="modal">
            <button
                type="button"
                class="btn-close"
                @click="close"
            >
                x
            </button>
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        close() {
            this.$emit("close")
        },
    },
}
</script>

<style lang="scss" scoped>
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 410px;
    height: auto;
}

.modal {
    background: #ffffff;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
}

.modal-header,
.modal-footer {
    padding: 15px;
    display: flex;
}

.modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
}

.btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4aae9b;
    background: transparent;
}

.btn-green {
    color: white;
    background: #4aae9b;
    border: 1px solid #4aae9b;
    border-radius: 2px;
}
</style>
