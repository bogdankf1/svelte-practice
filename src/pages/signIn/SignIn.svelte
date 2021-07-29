<script lang="ts">
  let username: string;
  let password: string;
</script>

<div class="root">
  <form>
    <input bind:value={username} placeholder="Username" />
    <input type="password" bind:value={password} placeholder="Password" />
    <div class="submit-button-box">
      <button>Sign In</button>
    </div>
  </form>
</div>

<style>
  .root {
    width: 100%;
  }
  form {
    width: 100%;
    padding: 20px;
  }
  input {
    width: 100%;
    height: 48px;
    border-radius: 10px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    padding: 0 5px;
  }
  .submit-button-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
  }
</style>
