<script lang="ts">
  import { signInWithOAuth2 } from "../api/appwriteUtils";
  import "@appwrite.io/pink";
  import "@appwrite.io/pink-icons";
  export let providerName: string;

  const onClick = () => {
    const value = signInWithOAuth2(providerName);
    console.log(value);
  };
</script>

<button class="button is-secondary" on:click={onClick}>
  <slot>
    <span class="icon">
      <i class="icon-{providerName}" />
    </span>
    <span
      >Login with {providerName[0].toUpperCase()}{providerName.slice(1)}</span
    >
  </slot>
</button>
