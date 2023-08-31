<router>
  {
    redirect: to => {
      // the function receives the target route as the argument
      // a relative location doesn't start with `/`
      // or { path: 'profile'}
      return '/about/reports'
    },
  }
</router>
