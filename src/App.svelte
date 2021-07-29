<script lang="ts">
  import { Router, Route } from 'svelte-navigator';
  import Navbar from './components/navbar/Navbar.svelte';
  import Home from './pages/home/Home.svelte';
  import SignIn from './pages/signIn/SignIn.svelte';
  import SignUp from './pages/signUp/SignUp.svelte';
</script>

<svelte:body />

<div class="wrapper">
  <Router>
    <Navbar />
    <div class="root">
      <Route path="sign-in">
        <SignIn />
      </Route>
      <Route path="sign-up">
        <SignUp />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </div>
  </Router>
</div>

<style>
  :global(body),
  :global(ul),
  :global(input) {
    padding: 0;
    margin: 0;
    border: 0;
  }
  .wrapper {
    width: 100%;
  }
  .root {
    max-width: 600px;
    margin: 0 auto;
  }
</style>
