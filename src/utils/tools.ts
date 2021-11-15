class Tools {
  // 睡眠函数
  public $sleep(delay: number) {
    return new Promise((resolve) => setTimeout(resolve, delay))
  }
}

export default new Tools()
