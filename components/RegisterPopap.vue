<template>
  <div>
    <div v-if="show" class="modal-overlay" @click="closeModal">
      <div class="modal" @click.stop>
        <div>
          <h2>
            Благодарим и приветствуем тебя в нашем стильном магазине На сайте
            Мировые звезды
          </h2>
        </div>
        <FormKit
          type="form"
          :config="{ preserveErrors: true }"
          id="registration-example"
          :form-class="submitted ? 'hide' : 'show'"
          submit-label="Register"
          @submit="Submit"
          :actions="false"
          #default="{ value }"
        >
          <FormKit
            v-model="login"
            :message-class="{
              'text-red-700': true,
              'text-xs': true,
              'mb-7': true,
            }"
            type="text"
            name="email"
            input-class="h-10 px-2 rounded-xl mb-4"
            label="Почта"
            placeholder="jane@example.com"
            validation="required|email"
          />
          <div class="double">
            <FormKit
              v-model="password"
              type="password"
              name="password"
              label="Введите пароль"
              input-class="h-10 px-2 rounded-xl mb-4"
              :message-class="{
                'text-red-700': true,
                'text-xs': true,
                'mb-7': true,
              }"
              validation="required|length:6|matches:/[^a-zA-Z]/"
              :validation-messages="{
                matches: 'Please include at least one symbol',
              }"
              placeholder="Пароль"
            />
            <FormKit
              type="password"
              name="password_confirm"
              input-class="h-10  px-2 rounded-xl mb-4"
              :message-class="{
                'text-red-700': true,
                'text-xs': true,
                'mb-7': true,
              }"
              label="Повторите пароль"
              placeholder="Пароль"
              validation="required|confirm"
            />
          </div>
          <div class="form__link">
            <label class="round-checkbox">
              <input type="checkbox" />
              <span class="checkmark"></span>
              Запомнить меня
            </label>
            <a href="#">Забыли пароль?</a>
          </div>
          <FormKit
            input-class="bg-blue-800 text-white py-4 w-full"
            type="submit"
            label="Зарегистрироваться"
          />
        </FormKit>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from "../store/store";
const counter = useCounterStore();

const show = ref(true);
const submitted = ref(false);
const password = ref("");
const login = ref("");

function closeModal() {
  show.value = false;
  document.body.style.overflow = "";
}
function Submit() {
  submitted.value = true;
  show.value = false;
  document.body.style.overflow = "";
  counter.$patch({
    password: password.value,
    login: login.value,
    reg: true,
  });
}
</script>
<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  z-index: 1000;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background: #fff;
  padding: 87px 70px 80px 70px;
  border-radius: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  max-width: 680px;
}
.form__link {
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  a {
    text-decoration: none;
  }
}
h2 {
  font-size: 30px;
  text-align: center;
  font-weight: 900;
}

.round-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.round-checkbox input {
  display: none;
}

.checkmark {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #000;
  display: inline-block;
  margin-right: 10px;
  position: relative;
}

.round-checkbox input:checked + .checkmark:after {
  content: "";
  width: 10px;
  height: 10px;
  background-color: #000;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
