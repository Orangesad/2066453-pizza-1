<template>
  <div>
    <header class="header">
      <div class="header__logo">
        <router-link to="/" class="logo">
          <img
            src="@/assets/img/logo.svg"
            alt="V!U!E! Pizza logo"
            width="90"
            height="40"
          />
        </router-link>
      </div>
      <div class="header__cart">
        <router-link to="/cart"> 0 ₽ </router-link>
      </div>
      <div class="header__user">
        <a href="#" class="header__login"><span>Войти</span></a>
      </div>
    </header>
    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>

          <div class="content__dough">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите тесто</h2>
              <div class="sheet__content dough">
                <label
                  v-for="item in dough"
                  :key="item.id"
                  class="dough__input"
                  :class="[
                    item.id === 1
                      ? 'dough__input--light'
                      : 'dough__input--large',
                  ]"
                >
                  <input
                    type="radio"
                    name="dought"
                    :value="[item.id === 1 ? 'light' : 'large']"
                    class="visually-hidden"
                    checked
                  />
                  <b>{{ item.name }}</b>
                  <span>{{ item.description }}</span>
                </label>
              </div>
            </div>
          </div>

          <div class="content__diameter">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите размер</h2>

              <div class="sheet__content diameter">
                <label
                  v-for="item in sizes"
                  :key="item.id"
                  class="diameter__input"
                  :class="{
                    'diameter__input--small': item.id === 1,
                    'diameter__input--normal': item.id === 2,
                    'diameter__input--big': item.id === 3,
                  }"
                >
                  <input
                    type="radio"
                    name="diameter"
                    :value="{
                      small: item.id === 1,
                      normal: item.id === 2,
                      big: item.id === 3,
                    }"
                    class="visually-hidden"
                  />
                  <span>{{ item.name }}</span>
                </label>
              </div>
            </div>
          </div>

          <div class="content__ingredients">
            <div class="sheet">
              <h2 class="title title--small sheet__title">
                Выберите ингредиенты
              </h2>

              <div class="sheet__content ingredients">
                <div class="ingredients__sauce">
                  <p>Основной соус:</p>

                  <label
                    v-for="item in sauces"
                    :key="item.id"
                    class="radio ingredients__input"
                  >
                    <input
                      type="radio"
                      name="sauce"
                      :value="{ tomato: item.id === 1, creamy: item.id === 2 }"
                      checked
                    />
                    <span>{{ item.name }}</span>
                  </label>
                </div>

                <div class="ingredients__filling">
                  <p>Начинка:</p>

                  <ul class="ingredients__list">
                    <li
                      v-for="item in ingredients"
                      :key="item.id"
                      class="ingredients__item"
                    >
                      <span
                        class="filling"
                        :class="ingredientsListStyleClass(item.id)"
                      >
                        {{ item.name }}
                      </span>
                      <div class="counter counter--orange ingredients__counter">
                        <button
                          type="button"
                          class="counter__button counter__button--minus"
                          disabled
                        >
                          <span class="visually-hidden">Меньше</span>
                        </button>
                        <input
                          type="text"
                          name="counter"
                          class="counter__input"
                          value="0"
                        />
                        <button
                          type="button"
                          class="counter__button counter__button--plus"
                        >
                          <span class="visually-hidden">Больше</span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="content__pizza">
            <label class="input">
              <span class="visually-hidden">Название пиццы</span>
              <input
                type="text"
                name="pizza_name"
                placeholder="Введите название пиццы"
              />
            </label>

            <div class="content__constructor">
              <div class="pizza pizza--foundation--big-tomato">
                <div class="pizza__wrapper">
                  <div class="pizza__filling pizza__filling--ananas"></div>
                  <div class="pizza__filling pizza__filling--bacon"></div>
                  <div class="pizza__filling pizza__filling--cheddar"></div>
                </div>
              </div>
            </div>

            <div class="content__result">
              <p>Итого: 0 ₽</p>
              <button type="button" class="button" disabled>Готовьте!</button>
            </div>
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import misc from "@/static/misc.json";
import pizza from "@/static/pizza.json";
import user from "@/static/user.json";
export default {
  name: "Index",
  data() {
    return {
      misc: misc,
      user: user,
      dough: pizza.dough,
      sizes: pizza.sizes,
      sauces: pizza.sauces,
      ingredients: pizza.ingredients,
    };
  },
  methods: {
    ingredientsListStyleClass(id) {
      switch (id) {
        case 1:
          return "filling--mushrooms";
        case 2:
          return "filling--cheddar";
        case 3:
          return "filling--salami";
        case 4:
          return "filling--ham";
        case 5:
          return "filling--ananas";
        case 6:
          return "filling--bacon";
        case 7:
          return "filling--onion";
        case 8:
          return "filling--chile";
        case 9:
          return "filling--jalapeno";
        case 10:
          return "filling--olives";
        case 11:
          return "filling--tomatoes";
        case 12:
          return "filling--salmon";
        case 13:
          return "filling--mozzarella";
        case 14:
          return "filling--parmesan";
        case 15:
          return "filling--blue_cheese";
        default:
          return "";
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
