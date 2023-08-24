<template>
    <div :class="classes">
        <VueSkipTo to="#main" label="Skip to main content" />
        <!--header-smart />

        <section-wrapper class="section-alert" theme="divider">
            <site-notification-alert v-if="libraryAlert" class="library-alert" v-bind="libraryAlert" />
        </section-wrapper-->

        <main>
            <slot></slot>
        </main>

        <!--footer>
            <footer-primary :form="true" />
            <footer-sock />
        </footer-->
        <div id="libchat_5a44dfe7cc29aaee5bba635ab13fa753" />
    </div>
</template>