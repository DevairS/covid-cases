export interface IUseCase<T = any, R = any> {
  execute(command: T): Promise<R>;
}
