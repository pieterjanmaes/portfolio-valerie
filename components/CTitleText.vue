<template>
  <section class="c-title-text u-container">
    <div class="u-grid-lg u-py-8">
      <div class="c-title-text-left u-mb-7 u-mb-0-lg">
        <div class="c-title-text-left-content">
          <ContentSlot :use="$slots.left"/>
        </div>
      </div>

      <div class="c-title-text-right">
        <ContentSlot :use="$slots.right" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .c-title-text {

    h3 {
      text-transform: uppercase;
      margin-bottom: 1.75rem;
    }

    &-left {
      @include media-query(lg) {
        grid-column: 2 / 4;
      }

      &-content {
        @include media-query(lg) {
          position: sticky;
          top: 5rem;
        }
      }
    }

    &-right {

      h3 {
        margin-top: 2.5rem;
        margin-bottom: .25rem;

        &:first-child {
          margin-top: 0;
        }
      }

      p {
        margin-bottom: 1rem;

        a {
          color: inherit;
          text-decoration: underline;
        }
      }

      @include media-query(lg) {
        grid-column: 4 / 12;
      }
    }
  }
</style>