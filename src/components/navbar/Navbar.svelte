<script lang="ts">
  import { useNavigate } from 'svelte-navigator';

  const navigate = useNavigate();
</script>

<div class="root">
  <div class="inner">
    <div class="title" on:click={() => navigate('/')}>My Svelte</div>
    <div class="auth-buttons-box">
      <div class="auth-btn" on:click={() => navigate('/sign-in')}>Sign In</div>
      <div class="auth-btn" on:click={() => navigate('/sign-up')}>Sign Up</div>
    </div>
  </div>
</div>

<style>
  .root {
    width: 100%;
    height: 64px;
    background: #2c2a80;
  }
  .inner {
    max-width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
  }
  .title {
    color: #ffffff;
    font-size: 32px;
  }
  .auth-buttons-box {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .auth-btn {
    color: #ffffff;
    font-weight: 600;
  }
</style>
