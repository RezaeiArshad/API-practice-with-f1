const fetchData = async (whatToGet: string): Promise<object | null> => {
    try {
      const res = await fetch(`/api/${whatToGet}`)
      if (!res.ok) {
        throw new Error (`HTTP error ! status: ${res.status}`);
      }
      return await res.json()
    } catch (err) {
      console.log(err)
      return null;
    }
}

export default fetchData