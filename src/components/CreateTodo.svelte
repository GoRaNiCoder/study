<script>
  import shortid from 'shortid'
  import {todos,saveStorage} from '~/store'

  let title=''



  function CreateTodo(){
    if(!title || !title.trim()){return}
    $todos.unshift({
      id: shortid.generate(),
      title
    })
    $todos=$todos
    saveStorage()

    title=''


  }
  
</script>


<div class="create-todo">
  <input bind:value={title} type="text" class="form-control"
  on:keyup={(e) => {if (e.key==='Enter') CreateTodo()}}/>
  <button class="btn btn-primary" on:click={CreateTodo}>CreateTodo</button>
</div>

<style lang="scss">
  .create-todo{
    display: flex;
    margin-top: 50px;
    .btn{
      width:130px;
      height:50px;
      font-weight: 700;
      margin-left: 10px;
      flex-shrink: 0;
    }
  }
</style>

