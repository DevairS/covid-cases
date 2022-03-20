export interface IUseCase<T = any, Z = any, R = any> {
  execute(command: T, count: Z): Promise<R>;
}
