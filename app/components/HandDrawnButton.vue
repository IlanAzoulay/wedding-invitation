<template>
    <button class="btn-hand-drawn" :class="{ 'is-loading': loading, 'is-disabled': !enabled }" @click="$emit('click')">
      <div v-show="loading" class="loading-wrapper">
        <LoadingAnimation/>
      </div>
      {{buttonText}}
    </button>
</template>

<script>
export default {
    props: {
        buttonText: {type: String, required: true},
        loading: {type: Boolean, default: false},
        enabled: {type: Boolean, default: true}
    },
    emits: ['click'],
}
</script>

<style scoped>
  .btn-hand-drawn {
    --c: var(--btn-color, #3b82f6);
    position: relative;
    padding: 0.65em 1.7em;
    border: 2px solid var(--c);
    border-radius: 16em 1.8em 14em 1.8em / 1.8em 14em 1.8em 16em;
    background: transparent;
    color: var(--c);
    font: 700 calc(var(--btn-size, 18px) * 1.15)/1.2 "Bradley Hand", "Segoe Print", "Comic Sans MS", cursive;
    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5em;
  }

  .loading-wrapper {
    width: 1em;
    height: 1em;
    flex-shrink: 0;
  }
  .btn-hand-drawn::before,
  .btn-hand-drawn::after {
    content: "";
    position: absolute;
    pointer-events: none;
  }
  .btn-hand-drawn::before {
    inset: -0.25em -0.15em -0.1em -0.3em;
    border: 1px solid color-mix(in srgb, var(--c) 55%, transparent);
    border-radius: 1.8em 15em 1.8em 14em / 14em 1.8em 15em 1.8em;
    transform: rotate(-1.2deg);
  }
  .btn-hand-drawn::after {
    inset: 0.3em 0.5em;
    border-radius: inherit;
    background: repeating-linear-gradient(-55deg, color-mix(in srgb, var(--c) 30%, transparent) 0 1px, transparent 1px 0.4em);
    clip-path: inset(0 100% 0 0);
    transition: clip-path 0.45s cubic-bezier(0.65, 0, 0.35, 1);
  }
  .btn-hand-drawn:is(:hover, :focus-visible),
  .btn-hand-drawn:is(:hover, :focus-visible)::before,
  .btn-hand-drawn.is-loading,
  .btn-hand-drawn.is-loading::before {
    animation: btn-hand-drawn-boil 0.45s steps(1, end) infinite;
  }
  .btn-hand-drawn:is(:hover, :focus-visible)::before,
  .btn-hand-drawn.is-loading::before { animation-delay: -0.15s; }
  .btn-hand-drawn:is(:hover, :focus-visible)::after,
  .btn-hand-drawn.is-loading::after { clip-path: inset(0 0 0 0); }
  .btn-hand-drawn.is-disabled {
    filter: saturate(0);
    cursor: default;
  }
  .btn-hand-drawn.is-disabled:is(:hover, :focus-visible),
  .btn-hand-drawn.is-disabled:is(:hover, :focus-visible)::before,
  .btn-hand-drawn.is-disabled.is-loading,
  .btn-hand-drawn.is-disabled.is-loading::before {
    animation: none;
  }
  .btn-hand-drawn.is-disabled:is(:hover, :focus-visible)::after,
  .btn-hand-drawn.is-disabled.is-loading::after {
    clip-path: inset(0 100% 0 0);
  }

  @keyframes btn-hand-drawn-boil {
    0%   { border-radius: 16em 1.8em 14em 1.8em / 1.8em 14em 1.8em 16em; }
    33%  { border-radius: 1.8em 15em 1.6em 16em / 15em 1.6em 16em 1.8em; }
    66%  { border-radius: 14em 2.2em 16em 1.4em / 1.4em 16em 2.2em 14em; }
  }

  @media (prefers-reduced-motion: reduce) {
    .btn-hand-drawn, .btn-hand-drawn *, .btn-hand-drawn::before, .btn-hand-drawn::after, .btn-hand-drawn *::before, .btn-hand-drawn *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
</style>