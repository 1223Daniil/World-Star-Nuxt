<template>
  <div class="WheelFortune">
    <div class="WheelFortune__content">
      <div class="WheelFortune__content__descripton">
        <h2>Колесо удачи. Не упустите свой шанс!</h2>
        <p style="color: #fff; font-size: 20px">
          Колесо удачи вращается, и только от вас зависит, какой приз вам
          достанется. Так что дерзайте, действуйте, и пусть удача будет на вашей
          стороне!
        </p>

        <div
          v-if="!ChangeWin"
          class="WheelFortune__content__descripton__button"
        >
          <button
            @click="spin(), (activeButtonOne = 1)"
            :disabled="activeBtn"
            :class="{ active: activeButtonOne === 1 }"
          >
            Играть</button
          ><button
            @click="(activeButtonOne = 2), $router.push('/reviews')"
            :class="{ active: activeButtonOne === 2 }"
          >
            Отзывы участников
          </button>
        </div>
        <div
          v-if="!ChangeWin"
          class="WheelFortune__content__descripton__groupbutton"
        >
          <h5>Выбери количество спинов</h5>
          <div>
            <button
              @click="activeButtonTwo = 1"
              :class="{ active: activeButtonTwo === 1 }"
            >
              1 Спин 500 р/ws
            </button>
            <button
              @click="activeButtonTwo = 3"
              :class="{ active: activeButtonTwo === 3 }"
            >
              2 Спина 900 р/ws
            </button>
            <button
              @click="activeButtonTwo = 4"
              :class="{ active: activeButtonTwo === 4 }"
            >
              3 Спина 1 300 р/ws</button
            ><button
              @click="activeButtonTwo = 5"
              :class="{ active: activeButtonTwo === 5 }"
            >
              4 Спина 1 600 р/ws</button
            ><button
              @click="activeButtonTwo = 6"
              :class="{ active: activeButtonTwo === 6 }"
            >
              5 Спина 1 900 р/ws
            </button>
          </div>
        </div>
        <div v-if="ChangeWin">
          <div class="WheelFortune__content__descripton__button">
            <button
              @click="spin(), (activeButtonOne = 1)"
              :disabled="activeBtn"
              :class="{ active: activeButtonOne === 1 }"
            >
              Куртить 4 раза</button
            ><button
              @click="(activeButtonOne = 2), $router.push('/reviews')"
              :class="{ active: activeButtonOne === 2 }"
            >
              Отзывы участников
            </button>
          </div>
          <div
            v-if="!activeBtn && win == `Пусто`"
            class="WheelFortune__content__descripton__winnerNan"
          >
            <p>К сожелению вы нечего не выиграли</p>
          </div>
          <div
            class="WheelFortune__content__descripton__winner"
            v-if="!activeBtn && win !== `Пусто`"
          >
            <h5>Твой выигрыш</h5>

            <div class="WheelFortune__content__descripton__winner__cost">
              <p
                class="WheelFortune__content__descripton__winner__cost__congratulation"
              >
                ПОЗДРАВЛЯЕМ!!! ТЫ ВЫЙГРАЛ
              </p>
              <div>
                <span>{{ win }}</span>
                <button>Получить выигрыш</button>
              </div>
            </div>
          </div>
        </div>
        <span class="WheelFortune__content__descripton__condition"
          >Ты можешь потратить выигрыш при покупки товаров</span
        >
      </div>
      <div class="WheelFortune__content__Fortune">
        <div class="wheel">
          <div class="inner">
            <div class="slice" v-for="prize in prizes" :key="prize">
              <span class="prize">{{ prize }}</span>
            </div>
          </div>
        </div>
        <div class="wheel-outer"></div>
        <svg id="svg-dotted" viewBox="0 0 100 100">
          <circle id="circle-dotted" cx="50" cy="50" r="40" />
        </svg>
        <svg id="svg-arrow" xmlns="http://www.w3.org/2000/svg">
          <path
            style="
              fill: #ff2e52;
              stroke: #012e52;
              stroke-width: 4;
              stroke-linejoin: round;
            "
            d="M 81.540414,49.378716 H 121.51935 L 101.4866,69.420346 Z"
          />
        </svg>
        <button @click="spin()" :disabled="activeBtn">WS</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeButtonOne: null,
      activeButtonTwo: null,
      prizes: [
        "Встреча со звездой",
        "Звезда в Статусе",
        "600 WS",
        "Пусто",
        "1200 WS",
        "Подарок за 300 WS",
        "1200 WS",
        "Подарок за 150 WS",
      ],
      activeBtn: false,
      deg: 0,
      win: null,
      ChangeWin: false,
    };
  },
  methods: {
    spin() {
      this.win = null;
      this.activeBtn = true;
      setTimeout(() => (this.activeBtn = false), 5100);

      let spins = Math.floor(Math.random() * 7) + 9; //perform between 9 and 15 spins
      // console.log("spins: " + spins);

      let wheelAngle = Math.floor(Math.random() * 8) * 45; //set wheel angle rotation
      // console.log("wheelAngle: " + wheelAngle);

      let sectorAngle = Math.floor(Math.random() * 14) + 1; //set sector angle rotation
      sectorAngle *= Math.floor(Math.random() * 2) == 1 ? 1 : -1; //between -14deg and +14deg (28deg range of 30deg sector)
      // console.log("sectorAngle: " + sectorAngle);
      this.deg += 360 * spins + wheelAngle + sectorAngle;
      document.querySelector(
        ".inner"
      ).style.transform = `rotate(${this.deg}deg)`;

      setTimeout(() => (this.deg -= sectorAngle), 100); //reset sector angle rotation to avoid angle > +-44deg on next rotation

      let index = Math.floor((this.deg - sectorAngle) / 45) % 8; //get the prize
      // console.log("prize index:" + index);
      console.log("you will win: " + this.prizes[index]);
      this.win = this.prizes[index];

      setTimeout(() => (this.ChangeWin = true), 5100);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/style/MainPage/WheelFortune.scss";
</style>
