const registerWithEmail = async (email: string, password: string) => {
  const client = usePublicClient()
  const { data, error } = await client.auth.signUp({ email, password })

  return {
    data,
    error
  }
}

const bulkRegisterWithEmail = async () => {
  const rawUsers = await import('@/data/users.json')
  rawUsers.forEach(async (user: any) => {
    const password = user.given_name + '1234$'
    const { data, error } = await registerWithEmail(user.email, password)
    console.log('bulkRegisterWithEmail', data, error, password)
  })
}

export { registerWithEmail, bulkRegisterWithEmail }
