<script lang="ts">
  import { onMount } from "svelte";
  import "prismjs";
  import "prismjs/components/prism-typescript";
  import "prismjs/plugins/line-numbers/prism-line-numbers";
  import { Provider } from "./../node_modules/appwrite/src/enums/provider.ts";
  import { getAccount } from "./api/appwriteUtils.ts";
  import appwriteLogo from "./assets/built-with-appwrite.svg";
  import LoginButton from "./lib/LoginButton.svelte";

  let loggedIn = false;

  let snippet = `const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('project_test');

    const account = new Account(client);
    const avatar = new Avatars(client);

    export function getAmexCard() {
    return avatar.getCreditCard(CreditCard.Amex);
    }

    export function signInWithGoogle() {
        account.createOAuth2Session(Provider.Google, window.location.origin);
    }`;

  onMount(async () => {
    const response = await getAccount();
    if (response) {
      loggedIn = true;
    }
  });
</script>

<main>
  <div class="header">
    <a href="https://appwrite.io" target="_blank" rel="noreferrer">
      <img src={appwriteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
    <h1>Appwrite Enums Demo</h1>
  </div>
  {#if !loggedIn}
    <div class="grid-box u-margin-block-start-32 u-padding-block-end-56">
      <LoginButton providerName={Provider.Github} />
      <LoginButton providerName={Provider.Google} />
      <LoginButton providerName={Provider.Discord} />
    </div>
  {/if}
  <pre class="inline-code language-typescript line-numbers">
    <code>{snippet}</code>
  </pre>
</main>

<style>
  @import "prismjs/themes/prism.css";
  @import "prismjs/plugins/line-numbers/prism-line-numbers.css";

  pre {
    padding: 1rem;
    overflow-x: auto;
    counter-reset: linenumber;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
</style>
