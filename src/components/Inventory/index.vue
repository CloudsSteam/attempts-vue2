<template>
  <div
    class="Inventory-aside-container"
    ref="input"
  >
    <div class="title">
      <h1>今日任务</h1>
    </div>
    <div class="input">
      <input
        type="text"
        v-model="title"
        @keydown.enter="addTodo()"
        placeholder="输入目标任务"
      />
      <button
        v-if="active < all"
        @click="clear"
      >完成任务</button>
    </div>
    <div class="todos">
      <ul v-if="todos.length">
        <li
          v-for="(todo, title) in todos"
          :key="title"
        >
          <input
            :id=" todo.title "
            id和label中for绑定点击效果
            type="checkbox"
            v-model="todo.done"
          />
          <label
            :for="todo.title "
            :class="{ done: todo.done }"
          >
            {{ todo.title }}
          </label>
        </li>
      </ul>
      <div
        class="wu"
        v-else
      > 暂无目标</div>
    </div>

    <div class="allin">
      <div class="all">
        <label for="allin">全选</label>
        <input
          id="allin"
          type="checkbox"
          v-model="allDone"
        />
      </div>

      <div class="allincontainer">
        <label for="allin">{{ active }} / {{ all }}</label></div>

    </div>
  </div>
</template>

<script>
import store from "./store";
import { showMessage } from "@/utils"
export default {
  data () {
    return {
      title: "",
      //存在问题，没有定义todos则渲染不出这组件
      //得先定义todos被localStorage储存先再取出才是目标效果
      //
      todos: [
        { title: "吃饭", done: false },
        { title: "睡觉", done: false },
        { title: "打豆豆", done: false },
        { title: "尹青", done: false }
      ]
      // todos:store.fetch(),

    };
    // this.todos:store.fetch(),

  },
  watch: {
    todos: {
      handler (newVal) {
        store.save(newVal);
        // store.fetch();
      },
      deep: true
    }
  },
  methods: {
    addTodo () {
      // this.todos.push(this.title);
      if (!this.title) {
        return
      }
      this.todos.push({ title: this.title, done: false });
      this.title = "";

      showMessage({
        content: "创建成功！",
        type: "success",
        duration: 1000,
        container: this.$refs.input,
        callback: function () {
          // console.log("完成弹窗消息！！");   
        },
      });
      // this.todos:store.fetch();
    },
    clear () {
      this.todos = this.todos.filter(v => !v.done);
    },
    change () {   //挂载运行
      // console.log(window.localStorage.getItem("todos-vuejs").length);
      if (
        window.localStorage.getItem("todos-vuejs")
        &&
        window.JSON.parse(window.localStorage.getItem("todos-vuejs")).length !== 0
      ) {
        this.todos = store.fetch();
      }
    },
    // handleClick () {
    //   console.log("fwef");
    // }
  },
  mounted () {    //载入时候从localStorage中读取判断todos有无缓，没有缓存就读取data里面的数据
    this.change();
  },
  computed: {
    // todoss(){F
    //   return this.todos.length===0 ? (
    //   todos.push({ title: "吃饭", done: false },
    //     { title: "睡觉", done: false },
    //     { title: "打豆豆", done: false },
    //     { title: "尹青", done: false }
    //   )
    //   ):{}
    // },
    active () {
      return this.todos.filter(v => !v.done).length;
    },
    all () {
      return this.todos.length;
    },

    allDone: {  //计算属性活学活用
      get: function () {
        return this.active === 0; //检测运行了get有缓存变化。则运行set
      },
      set (val) { //初始不点全选get直接返回，点了一次就运行set函数再点一次就赋回去
        this.todos.forEach(todo => {
          todo.done = val;
          //val!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        });
      }
    }
  }
};
// localStorage.setItem('todos',JSON.stringify(todos));
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.title {
  margin: 0 auto;
  text-align: center;
  color: #fff;
}
.input {
  margin: 0 auto;
  // text-align: center;
  display: block;
  position: relative;
  height: 50px;
  // overflow: hidden;
  input {
    outline-style: none;
    border: 0px;
    outline-style: none;
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 8px 0px;
    width: 410px;
    font-size: 24px;
    font-family: "Microsoft soft";
    position: absolute;
    left: 15%;
  }
  input:focus {
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(102, 175, 233, 0.6);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(102, 175, 233, 0.6);
  }
  button {
    position: absolute;
    left: 45%;
    // margin: 0 50px;
    // display: block;
    border: 0;
    background: none;
    text-transform: uppercase;
    color: #4361ee;
    font-size: 20px;
    position: relative;
    outline: none;
    padding: 10px 180px;
    box-sizing: border-box;
  }
  button::before,
  button::after {
    box-sizing: inherit;
    position: absolute;
    content: "";
    border: 2px solid transparent;
    width: 0;
    height: 0;
  }

  button::after {
    bottom: 0;
    right: 0;
  }

  button::before {
    top: 0;
    left: 0;
  }

  button:hover::before,
  button:hover::after {
    width: 100%;
    height: 100%;
  }

  button:hover::before {
    border-top-color: #4361ee;
    border-right-color: #4361ee;
    transition: width 0.3s ease-out, height 0.3s ease-out 0.3s;
  }

  button:hover::after {
    border-bottom-color: #4361ee;
    border-left-color: #4361ee;
    transition: border-color 0s ease-out 0.6s, width 0.3s ease-out 0.6s,
      height 0.3s ease-out 1s;
  }
}
.allin {
  position: relative;
  height: 30px;
  font-size: 27px;
  // margin: 0 auto;
  display: flex;
  input {
    height: 23px;
    width: 23px;
  }
  .all {
    position: absolute;
    left: 2.5%;
    input {
      margin: 0 25px;
    }
  }
  .allincontainer {
    position: absolute;
    // width: 400px;
    left: 42%;
    // transform: translate(6%, 6%);
  }
}

.todos {
  overflow: hidden;
  li {
    padding: 10px 0;
    font-size: 20px;
    input {
      width: 22px;
      height: 22px;
      margin: 10px 0 0 0;
      border-radius: 50%;
    }
    label {
      line-height: 20px;
      font-size: 32px;
    }
    input:checked + label {
      font-size: 32px;
    }
  }
  .wu {
    font-size: 30px;
    color: #008c8c;
    margin: 0 0 0 40%;
  }
}

.done {
  color: #00bfff;
  text-decoration: aqua;
}
.Inventory-aside-container {
  width: 100%;
  height: 100%;
  /* margin: 70px auto; */
  border: 2px slateblue solid;
  /* float: left; */
}
li {
  list-style: "";
}

// .Inventory-aside-container > input {
//   width: 3%;
//   // width: 50px;
// }
</style>
