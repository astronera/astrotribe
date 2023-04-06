const getCurrent = async () => {
  const client = usePublicClient()
  const {
    data: { session },
    error
  } = await client.auth.getSession()

  return {
    session,
    error
  }
}

const refresh = async () => {
  const client = usePublicClient()
  const { data, error } = await client.auth.refreshSession()
  const { session, user } = data

  return {
    data,
    error
  }
}

export { getCurrent, refresh }
