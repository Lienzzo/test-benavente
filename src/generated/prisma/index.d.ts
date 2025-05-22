
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Obra
 * 
 */
export type Obra = $Result.DefaultSelection<Prisma.$ObraPayload>
/**
 * Model Transportista
 * 
 */
export type Transportista = $Result.DefaultSelection<Prisma.$TransportistaPayload>
/**
 * Model Vehiculo
 * 
 */
export type Vehiculo = $Result.DefaultSelection<Prisma.$VehiculoPayload>
/**
 * Model Conductor
 * 
 */
export type Conductor = $Result.DefaultSelection<Prisma.$ConductorPayload>
/**
 * Model Material
 * 
 */
export type Material = $Result.DefaultSelection<Prisma.$MaterialPayload>
/**
 * Model Radio
 * 
 */
export type Radio = $Result.DefaultSelection<Prisma.$RadioPayload>
/**
 * Model Jornada
 * 
 */
export type Jornada = $Result.DefaultSelection<Prisma.$JornadaPayload>
/**
 * Model ParteDeTrabajo
 * 
 */
export type ParteDeTrabajo = $Result.DefaultSelection<Prisma.$ParteDeTrabajoPayload>
/**
 * Model LineaParte
 * 
 */
export type LineaParte = $Result.DefaultSelection<Prisma.$LineaPartePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EstadoParte: {
  PENDIENTE: 'PENDIENTE',
  EN_PROCESO: 'EN_PROCESO',
  COMPLETADO: 'COMPLETADO',
  CANCELADO: 'CANCELADO',
  RECHAZADO: 'RECHAZADO'
};

export type EstadoParte = (typeof EstadoParte)[keyof typeof EstadoParte]


export const TipoVehiculo: {
  CAMION: 'CAMION',
  EXCAVADORA: 'EXCAVADORA',
  RETROEXCAVADORA: 'RETROEXCAVADORA',
  BULLDOZER: 'BULLDOZER',
  GRUA: 'GRUA',
  OTRO: 'OTRO'
};

export type TipoVehiculo = (typeof TipoVehiculo)[keyof typeof TipoVehiculo]

}

export type EstadoParte = $Enums.EstadoParte

export const EstadoParte: typeof $Enums.EstadoParte

export type TipoVehiculo = $Enums.TipoVehiculo

export const TipoVehiculo: typeof $Enums.TipoVehiculo

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clientes
 * const clientes = await prisma.cliente.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Clientes
   * const clientes = await prisma.cliente.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.obra`: Exposes CRUD operations for the **Obra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Obras
    * const obras = await prisma.obra.findMany()
    * ```
    */
  get obra(): Prisma.ObraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transportista`: Exposes CRUD operations for the **Transportista** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transportistas
    * const transportistas = await prisma.transportista.findMany()
    * ```
    */
  get transportista(): Prisma.TransportistaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehiculo`: Exposes CRUD operations for the **Vehiculo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehiculos
    * const vehiculos = await prisma.vehiculo.findMany()
    * ```
    */
  get vehiculo(): Prisma.VehiculoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conductor`: Exposes CRUD operations for the **Conductor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conductors
    * const conductors = await prisma.conductor.findMany()
    * ```
    */
  get conductor(): Prisma.ConductorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.material`: Exposes CRUD operations for the **Material** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materials
    * const materials = await prisma.material.findMany()
    * ```
    */
  get material(): Prisma.MaterialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.radio`: Exposes CRUD operations for the **Radio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Radios
    * const radios = await prisma.radio.findMany()
    * ```
    */
  get radio(): Prisma.RadioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jornada`: Exposes CRUD operations for the **Jornada** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jornadas
    * const jornadas = await prisma.jornada.findMany()
    * ```
    */
  get jornada(): Prisma.JornadaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parteDeTrabajo`: Exposes CRUD operations for the **ParteDeTrabajo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParteDeTrabajos
    * const parteDeTrabajos = await prisma.parteDeTrabajo.findMany()
    * ```
    */
  get parteDeTrabajo(): Prisma.ParteDeTrabajoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lineaParte`: Exposes CRUD operations for the **LineaParte** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LineaPartes
    * const lineaPartes = await prisma.lineaParte.findMany()
    * ```
    */
  get lineaParte(): Prisma.LineaParteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Cliente: 'Cliente',
    Obra: 'Obra',
    Transportista: 'Transportista',
    Vehiculo: 'Vehiculo',
    Conductor: 'Conductor',
    Material: 'Material',
    Radio: 'Radio',
    Jornada: 'Jornada',
    ParteDeTrabajo: 'ParteDeTrabajo',
    LineaParte: 'LineaParte'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cliente" | "obra" | "transportista" | "vehiculo" | "conductor" | "material" | "radio" | "jornada" | "parteDeTrabajo" | "lineaParte"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Obra: {
        payload: Prisma.$ObraPayload<ExtArgs>
        fields: Prisma.ObraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ObraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ObraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>
          }
          findFirst: {
            args: Prisma.ObraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ObraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>
          }
          findMany: {
            args: Prisma.ObraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>[]
          }
          create: {
            args: Prisma.ObraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>
          }
          createMany: {
            args: Prisma.ObraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ObraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>[]
          }
          delete: {
            args: Prisma.ObraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>
          }
          update: {
            args: Prisma.ObraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>
          }
          deleteMany: {
            args: Prisma.ObraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ObraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ObraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>[]
          }
          upsert: {
            args: Prisma.ObraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>
          }
          aggregate: {
            args: Prisma.ObraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateObra>
          }
          groupBy: {
            args: Prisma.ObraGroupByArgs<ExtArgs>
            result: $Utils.Optional<ObraGroupByOutputType>[]
          }
          count: {
            args: Prisma.ObraCountArgs<ExtArgs>
            result: $Utils.Optional<ObraCountAggregateOutputType> | number
          }
        }
      }
      Transportista: {
        payload: Prisma.$TransportistaPayload<ExtArgs>
        fields: Prisma.TransportistaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransportistaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportistaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransportistaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportistaPayload>
          }
          findFirst: {
            args: Prisma.TransportistaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportistaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransportistaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportistaPayload>
          }
          findMany: {
            args: Prisma.TransportistaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportistaPayload>[]
          }
          create: {
            args: Prisma.TransportistaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportistaPayload>
          }
          createMany: {
            args: Prisma.TransportistaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransportistaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportistaPayload>[]
          }
          delete: {
            args: Prisma.TransportistaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportistaPayload>
          }
          update: {
            args: Prisma.TransportistaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportistaPayload>
          }
          deleteMany: {
            args: Prisma.TransportistaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransportistaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransportistaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportistaPayload>[]
          }
          upsert: {
            args: Prisma.TransportistaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportistaPayload>
          }
          aggregate: {
            args: Prisma.TransportistaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransportista>
          }
          groupBy: {
            args: Prisma.TransportistaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransportistaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransportistaCountArgs<ExtArgs>
            result: $Utils.Optional<TransportistaCountAggregateOutputType> | number
          }
        }
      }
      Vehiculo: {
        payload: Prisma.$VehiculoPayload<ExtArgs>
        fields: Prisma.VehiculoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehiculoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehiculoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          findFirst: {
            args: Prisma.VehiculoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehiculoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          findMany: {
            args: Prisma.VehiculoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>[]
          }
          create: {
            args: Prisma.VehiculoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          createMany: {
            args: Prisma.VehiculoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehiculoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>[]
          }
          delete: {
            args: Prisma.VehiculoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          update: {
            args: Prisma.VehiculoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          deleteMany: {
            args: Prisma.VehiculoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehiculoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehiculoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>[]
          }
          upsert: {
            args: Prisma.VehiculoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          aggregate: {
            args: Prisma.VehiculoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehiculo>
          }
          groupBy: {
            args: Prisma.VehiculoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehiculoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehiculoCountArgs<ExtArgs>
            result: $Utils.Optional<VehiculoCountAggregateOutputType> | number
          }
        }
      }
      Conductor: {
        payload: Prisma.$ConductorPayload<ExtArgs>
        fields: Prisma.ConductorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConductorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConductorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>
          }
          findFirst: {
            args: Prisma.ConductorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConductorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>
          }
          findMany: {
            args: Prisma.ConductorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>[]
          }
          create: {
            args: Prisma.ConductorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>
          }
          createMany: {
            args: Prisma.ConductorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConductorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>[]
          }
          delete: {
            args: Prisma.ConductorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>
          }
          update: {
            args: Prisma.ConductorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>
          }
          deleteMany: {
            args: Prisma.ConductorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConductorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConductorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>[]
          }
          upsert: {
            args: Prisma.ConductorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>
          }
          aggregate: {
            args: Prisma.ConductorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConductor>
          }
          groupBy: {
            args: Prisma.ConductorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConductorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConductorCountArgs<ExtArgs>
            result: $Utils.Optional<ConductorCountAggregateOutputType> | number
          }
        }
      }
      Material: {
        payload: Prisma.$MaterialPayload<ExtArgs>
        fields: Prisma.MaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findFirst: {
            args: Prisma.MaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findMany: {
            args: Prisma.MaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          create: {
            args: Prisma.MaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          createMany: {
            args: Prisma.MaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaterialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          delete: {
            args: Prisma.MaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          update: {
            args: Prisma.MaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          deleteMany: {
            args: Prisma.MaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaterialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          upsert: {
            args: Prisma.MaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          aggregate: {
            args: Prisma.MaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterial>
          }
          groupBy: {
            args: Prisma.MaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaterialCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialCountAggregateOutputType> | number
          }
        }
      }
      Radio: {
        payload: Prisma.$RadioPayload<ExtArgs>
        fields: Prisma.RadioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RadioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RadioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadioPayload>
          }
          findFirst: {
            args: Prisma.RadioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RadioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadioPayload>
          }
          findMany: {
            args: Prisma.RadioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadioPayload>[]
          }
          create: {
            args: Prisma.RadioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadioPayload>
          }
          createMany: {
            args: Prisma.RadioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RadioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadioPayload>[]
          }
          delete: {
            args: Prisma.RadioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadioPayload>
          }
          update: {
            args: Prisma.RadioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadioPayload>
          }
          deleteMany: {
            args: Prisma.RadioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RadioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RadioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadioPayload>[]
          }
          upsert: {
            args: Prisma.RadioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadioPayload>
          }
          aggregate: {
            args: Prisma.RadioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRadio>
          }
          groupBy: {
            args: Prisma.RadioGroupByArgs<ExtArgs>
            result: $Utils.Optional<RadioGroupByOutputType>[]
          }
          count: {
            args: Prisma.RadioCountArgs<ExtArgs>
            result: $Utils.Optional<RadioCountAggregateOutputType> | number
          }
        }
      }
      Jornada: {
        payload: Prisma.$JornadaPayload<ExtArgs>
        fields: Prisma.JornadaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JornadaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JornadaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JornadaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JornadaPayload>
          }
          findFirst: {
            args: Prisma.JornadaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JornadaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JornadaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JornadaPayload>
          }
          findMany: {
            args: Prisma.JornadaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JornadaPayload>[]
          }
          create: {
            args: Prisma.JornadaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JornadaPayload>
          }
          createMany: {
            args: Prisma.JornadaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JornadaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JornadaPayload>[]
          }
          delete: {
            args: Prisma.JornadaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JornadaPayload>
          }
          update: {
            args: Prisma.JornadaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JornadaPayload>
          }
          deleteMany: {
            args: Prisma.JornadaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JornadaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JornadaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JornadaPayload>[]
          }
          upsert: {
            args: Prisma.JornadaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JornadaPayload>
          }
          aggregate: {
            args: Prisma.JornadaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJornada>
          }
          groupBy: {
            args: Prisma.JornadaGroupByArgs<ExtArgs>
            result: $Utils.Optional<JornadaGroupByOutputType>[]
          }
          count: {
            args: Prisma.JornadaCountArgs<ExtArgs>
            result: $Utils.Optional<JornadaCountAggregateOutputType> | number
          }
        }
      }
      ParteDeTrabajo: {
        payload: Prisma.$ParteDeTrabajoPayload<ExtArgs>
        fields: Prisma.ParteDeTrabajoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParteDeTrabajoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParteDeTrabajoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParteDeTrabajoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParteDeTrabajoPayload>
          }
          findFirst: {
            args: Prisma.ParteDeTrabajoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParteDeTrabajoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParteDeTrabajoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParteDeTrabajoPayload>
          }
          findMany: {
            args: Prisma.ParteDeTrabajoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParteDeTrabajoPayload>[]
          }
          create: {
            args: Prisma.ParteDeTrabajoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParteDeTrabajoPayload>
          }
          createMany: {
            args: Prisma.ParteDeTrabajoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParteDeTrabajoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParteDeTrabajoPayload>[]
          }
          delete: {
            args: Prisma.ParteDeTrabajoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParteDeTrabajoPayload>
          }
          update: {
            args: Prisma.ParteDeTrabajoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParteDeTrabajoPayload>
          }
          deleteMany: {
            args: Prisma.ParteDeTrabajoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParteDeTrabajoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParteDeTrabajoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParteDeTrabajoPayload>[]
          }
          upsert: {
            args: Prisma.ParteDeTrabajoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParteDeTrabajoPayload>
          }
          aggregate: {
            args: Prisma.ParteDeTrabajoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParteDeTrabajo>
          }
          groupBy: {
            args: Prisma.ParteDeTrabajoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParteDeTrabajoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParteDeTrabajoCountArgs<ExtArgs>
            result: $Utils.Optional<ParteDeTrabajoCountAggregateOutputType> | number
          }
        }
      }
      LineaParte: {
        payload: Prisma.$LineaPartePayload<ExtArgs>
        fields: Prisma.LineaParteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LineaParteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaPartePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LineaParteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaPartePayload>
          }
          findFirst: {
            args: Prisma.LineaParteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaPartePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LineaParteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaPartePayload>
          }
          findMany: {
            args: Prisma.LineaParteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaPartePayload>[]
          }
          create: {
            args: Prisma.LineaParteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaPartePayload>
          }
          createMany: {
            args: Prisma.LineaParteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LineaParteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaPartePayload>[]
          }
          delete: {
            args: Prisma.LineaParteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaPartePayload>
          }
          update: {
            args: Prisma.LineaParteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaPartePayload>
          }
          deleteMany: {
            args: Prisma.LineaParteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LineaParteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LineaParteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaPartePayload>[]
          }
          upsert: {
            args: Prisma.LineaParteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaPartePayload>
          }
          aggregate: {
            args: Prisma.LineaParteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLineaParte>
          }
          groupBy: {
            args: Prisma.LineaParteGroupByArgs<ExtArgs>
            result: $Utils.Optional<LineaParteGroupByOutputType>[]
          }
          count: {
            args: Prisma.LineaParteCountArgs<ExtArgs>
            result: $Utils.Optional<LineaParteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    cliente?: ClienteOmit
    obra?: ObraOmit
    transportista?: TransportistaOmit
    vehiculo?: VehiculoOmit
    conductor?: ConductorOmit
    material?: MaterialOmit
    radio?: RadioOmit
    jornada?: JornadaOmit
    parteDeTrabajo?: ParteDeTrabajoOmit
    lineaParte?: LineaParteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    obras: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obras?: boolean | ClienteCountOutputTypeCountObrasArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountObrasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObraWhereInput
  }


  /**
   * Count Type ObraCountOutputType
   */

  export type ObraCountOutputType = {
    partesTrabajo: number
  }

  export type ObraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partesTrabajo?: boolean | ObraCountOutputTypeCountPartesTrabajoArgs
  }

  // Custom InputTypes
  /**
   * ObraCountOutputType without action
   */
  export type ObraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraCountOutputType
     */
    select?: ObraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ObraCountOutputType without action
   */
  export type ObraCountOutputTypeCountPartesTrabajoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParteDeTrabajoWhereInput
  }


  /**
   * Count Type TransportistaCountOutputType
   */

  export type TransportistaCountOutputType = {
    vehiculos: number
  }

  export type TransportistaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehiculos?: boolean | TransportistaCountOutputTypeCountVehiculosArgs
  }

  // Custom InputTypes
  /**
   * TransportistaCountOutputType without action
   */
  export type TransportistaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportistaCountOutputType
     */
    select?: TransportistaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransportistaCountOutputType without action
   */
  export type TransportistaCountOutputTypeCountVehiculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehiculoWhereInput
  }


  /**
   * Count Type VehiculoCountOutputType
   */

  export type VehiculoCountOutputType = {
    partesTrabajo: number
    lineasParte: number
  }

  export type VehiculoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partesTrabajo?: boolean | VehiculoCountOutputTypeCountPartesTrabajoArgs
    lineasParte?: boolean | VehiculoCountOutputTypeCountLineasParteArgs
  }

  // Custom InputTypes
  /**
   * VehiculoCountOutputType without action
   */
  export type VehiculoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiculoCountOutputType
     */
    select?: VehiculoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehiculoCountOutputType without action
   */
  export type VehiculoCountOutputTypeCountPartesTrabajoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParteDeTrabajoWhereInput
  }

  /**
   * VehiculoCountOutputType without action
   */
  export type VehiculoCountOutputTypeCountLineasParteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LineaParteWhereInput
  }


  /**
   * Count Type ConductorCountOutputType
   */

  export type ConductorCountOutputType = {
    partesTrabajo: number
    jornadas: number
  }

  export type ConductorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partesTrabajo?: boolean | ConductorCountOutputTypeCountPartesTrabajoArgs
    jornadas?: boolean | ConductorCountOutputTypeCountJornadasArgs
  }

  // Custom InputTypes
  /**
   * ConductorCountOutputType without action
   */
  export type ConductorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConductorCountOutputType
     */
    select?: ConductorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConductorCountOutputType without action
   */
  export type ConductorCountOutputTypeCountPartesTrabajoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParteDeTrabajoWhereInput
  }

  /**
   * ConductorCountOutputType without action
   */
  export type ConductorCountOutputTypeCountJornadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JornadaWhereInput
  }


  /**
   * Count Type MaterialCountOutputType
   */

  export type MaterialCountOutputType = {
    lineasParte: number
  }

  export type MaterialCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lineasParte?: boolean | MaterialCountOutputTypeCountLineasParteArgs
  }

  // Custom InputTypes
  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialCountOutputType
     */
    select?: MaterialCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountLineasParteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LineaParteWhereInput
  }


  /**
   * Count Type RadioCountOutputType
   */

  export type RadioCountOutputType = {
    partesTrabajo: number
  }

  export type RadioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partesTrabajo?: boolean | RadioCountOutputTypeCountPartesTrabajoArgs
  }

  // Custom InputTypes
  /**
   * RadioCountOutputType without action
   */
  export type RadioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RadioCountOutputType
     */
    select?: RadioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RadioCountOutputType without action
   */
  export type RadioCountOutputTypeCountPartesTrabajoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParteDeTrabajoWhereInput
  }


  /**
   * Count Type ParteDeTrabajoCountOutputType
   */

  export type ParteDeTrabajoCountOutputType = {
    lineasParte: number
  }

  export type ParteDeTrabajoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lineasParte?: boolean | ParteDeTrabajoCountOutputTypeCountLineasParteArgs
  }

  // Custom InputTypes
  /**
   * ParteDeTrabajoCountOutputType without action
   */
  export type ParteDeTrabajoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParteDeTrabajoCountOutputType
     */
    select?: ParteDeTrabajoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParteDeTrabajoCountOutputType without action
   */
  export type ParteDeTrabajoCountOutputTypeCountLineasParteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LineaParteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    cif: string | null
    direccion: string | null
    codigoPostal: string | null
    ciudad: string | null
    provincia: string | null
    telefono: string | null
    email: string | null
    contacto: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    cif: string | null
    direccion: string | null
    codigoPostal: string | null
    ciudad: string | null
    provincia: string | null
    telefono: string | null
    email: string | null
    contacto: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nombre: number
    cif: number
    direccion: number
    codigoPostal: number
    ciudad: number
    provincia: number
    telefono: number
    email: number
    contacto: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClienteMinAggregateInputType = {
    id?: true
    nombre?: true
    cif?: true
    direccion?: true
    codigoPostal?: true
    ciudad?: true
    provincia?: true
    telefono?: true
    email?: true
    contacto?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nombre?: true
    cif?: true
    direccion?: true
    codigoPostal?: true
    ciudad?: true
    provincia?: true
    telefono?: true
    email?: true
    contacto?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nombre?: true
    cif?: true
    direccion?: true
    codigoPostal?: true
    ciudad?: true
    provincia?: true
    telefono?: true
    email?: true
    contacto?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: string
    nombre: string
    cif: string
    direccion: string
    codigoPostal: string
    ciudad: string
    provincia: string
    telefono: string | null
    email: string | null
    contacto: string | null
    createdAt: Date
    updatedAt: Date
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    cif?: boolean
    direccion?: boolean
    codigoPostal?: boolean
    ciudad?: boolean
    provincia?: boolean
    telefono?: boolean
    email?: boolean
    contacto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    obras?: boolean | Cliente$obrasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    cif?: boolean
    direccion?: boolean
    codigoPostal?: boolean
    ciudad?: boolean
    provincia?: boolean
    telefono?: boolean
    email?: boolean
    contacto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    cif?: boolean
    direccion?: boolean
    codigoPostal?: boolean
    ciudad?: boolean
    provincia?: boolean
    telefono?: boolean
    email?: boolean
    contacto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id?: boolean
    nombre?: boolean
    cif?: boolean
    direccion?: boolean
    codigoPostal?: boolean
    ciudad?: boolean
    provincia?: boolean
    telefono?: boolean
    email?: boolean
    contacto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "cif" | "direccion" | "codigoPostal" | "ciudad" | "provincia" | "telefono" | "email" | "contacto" | "createdAt" | "updatedAt", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obras?: boolean | Cliente$obrasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      obras: Prisma.$ObraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      cif: string
      direccion: string
      codigoPostal: string
      ciudad: string
      provincia: string
      telefono: string | null
      email: string | null
      contacto: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    obras<T extends Cliente$obrasArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$obrasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'String'>
    readonly nombre: FieldRef<"Cliente", 'String'>
    readonly cif: FieldRef<"Cliente", 'String'>
    readonly direccion: FieldRef<"Cliente", 'String'>
    readonly codigoPostal: FieldRef<"Cliente", 'String'>
    readonly ciudad: FieldRef<"Cliente", 'String'>
    readonly provincia: FieldRef<"Cliente", 'String'>
    readonly telefono: FieldRef<"Cliente", 'String'>
    readonly email: FieldRef<"Cliente", 'String'>
    readonly contacto: FieldRef<"Cliente", 'String'>
    readonly createdAt: FieldRef<"Cliente", 'DateTime'>
    readonly updatedAt: FieldRef<"Cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.obras
   */
  export type Cliente$obrasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    where?: ObraWhereInput
    orderBy?: ObraOrderByWithRelationInput | ObraOrderByWithRelationInput[]
    cursor?: ObraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ObraScalarFieldEnum | ObraScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Obra
   */

  export type AggregateObra = {
    _count: ObraCountAggregateOutputType | null
    _min: ObraMinAggregateOutputType | null
    _max: ObraMaxAggregateOutputType | null
  }

  export type ObraMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    direccion: string | null
    codigoPostal: string | null
    ciudad: string | null
    provincia: string | null
    estado: string | null
    fechaInicio: Date | null
    fechaFin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    clienteId: string | null
  }

  export type ObraMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    direccion: string | null
    codigoPostal: string | null
    ciudad: string | null
    provincia: string | null
    estado: string | null
    fechaInicio: Date | null
    fechaFin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    clienteId: string | null
  }

  export type ObraCountAggregateOutputType = {
    id: number
    nombre: number
    direccion: number
    codigoPostal: number
    ciudad: number
    provincia: number
    estado: number
    fechaInicio: number
    fechaFin: number
    createdAt: number
    updatedAt: number
    clienteId: number
    _all: number
  }


  export type ObraMinAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    codigoPostal?: true
    ciudad?: true
    provincia?: true
    estado?: true
    fechaInicio?: true
    fechaFin?: true
    createdAt?: true
    updatedAt?: true
    clienteId?: true
  }

  export type ObraMaxAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    codigoPostal?: true
    ciudad?: true
    provincia?: true
    estado?: true
    fechaInicio?: true
    fechaFin?: true
    createdAt?: true
    updatedAt?: true
    clienteId?: true
  }

  export type ObraCountAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    codigoPostal?: true
    ciudad?: true
    provincia?: true
    estado?: true
    fechaInicio?: true
    fechaFin?: true
    createdAt?: true
    updatedAt?: true
    clienteId?: true
    _all?: true
  }

  export type ObraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Obra to aggregate.
     */
    where?: ObraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obras to fetch.
     */
    orderBy?: ObraOrderByWithRelationInput | ObraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ObraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Obras
    **/
    _count?: true | ObraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ObraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ObraMaxAggregateInputType
  }

  export type GetObraAggregateType<T extends ObraAggregateArgs> = {
        [P in keyof T & keyof AggregateObra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObra[P]>
      : GetScalarType<T[P], AggregateObra[P]>
  }




  export type ObraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObraWhereInput
    orderBy?: ObraOrderByWithAggregationInput | ObraOrderByWithAggregationInput[]
    by: ObraScalarFieldEnum[] | ObraScalarFieldEnum
    having?: ObraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ObraCountAggregateInputType | true
    _min?: ObraMinAggregateInputType
    _max?: ObraMaxAggregateInputType
  }

  export type ObraGroupByOutputType = {
    id: string
    nombre: string
    direccion: string
    codigoPostal: string
    ciudad: string
    provincia: string
    estado: string
    fechaInicio: Date
    fechaFin: Date | null
    createdAt: Date
    updatedAt: Date
    clienteId: string
    _count: ObraCountAggregateOutputType | null
    _min: ObraMinAggregateOutputType | null
    _max: ObraMaxAggregateOutputType | null
  }

  type GetObraGroupByPayload<T extends ObraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ObraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ObraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ObraGroupByOutputType[P]>
            : GetScalarType<T[P], ObraGroupByOutputType[P]>
        }
      >
    >


  export type ObraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    codigoPostal?: boolean
    ciudad?: boolean
    provincia?: boolean
    estado?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clienteId?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    partesTrabajo?: boolean | Obra$partesTrabajoArgs<ExtArgs>
    _count?: boolean | ObraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["obra"]>

  export type ObraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    codigoPostal?: boolean
    ciudad?: boolean
    provincia?: boolean
    estado?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clienteId?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["obra"]>

  export type ObraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    codigoPostal?: boolean
    ciudad?: boolean
    provincia?: boolean
    estado?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clienteId?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["obra"]>

  export type ObraSelectScalar = {
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    codigoPostal?: boolean
    ciudad?: boolean
    provincia?: boolean
    estado?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clienteId?: boolean
  }

  export type ObraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "direccion" | "codigoPostal" | "ciudad" | "provincia" | "estado" | "fechaInicio" | "fechaFin" | "createdAt" | "updatedAt" | "clienteId", ExtArgs["result"]["obra"]>
  export type ObraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    partesTrabajo?: boolean | Obra$partesTrabajoArgs<ExtArgs>
    _count?: boolean | ObraCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ObraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type ObraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }

  export type $ObraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Obra"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      partesTrabajo: Prisma.$ParteDeTrabajoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      direccion: string
      codigoPostal: string
      ciudad: string
      provincia: string
      estado: string
      fechaInicio: Date
      fechaFin: Date | null
      createdAt: Date
      updatedAt: Date
      clienteId: string
    }, ExtArgs["result"]["obra"]>
    composites: {}
  }

  type ObraGetPayload<S extends boolean | null | undefined | ObraDefaultArgs> = $Result.GetResult<Prisma.$ObraPayload, S>

  type ObraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ObraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ObraCountAggregateInputType | true
    }

  export interface ObraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Obra'], meta: { name: 'Obra' } }
    /**
     * Find zero or one Obra that matches the filter.
     * @param {ObraFindUniqueArgs} args - Arguments to find a Obra
     * @example
     * // Get one Obra
     * const obra = await prisma.obra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ObraFindUniqueArgs>(args: SelectSubset<T, ObraFindUniqueArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Obra that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ObraFindUniqueOrThrowArgs} args - Arguments to find a Obra
     * @example
     * // Get one Obra
     * const obra = await prisma.obra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ObraFindUniqueOrThrowArgs>(args: SelectSubset<T, ObraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Obra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraFindFirstArgs} args - Arguments to find a Obra
     * @example
     * // Get one Obra
     * const obra = await prisma.obra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ObraFindFirstArgs>(args?: SelectSubset<T, ObraFindFirstArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Obra that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraFindFirstOrThrowArgs} args - Arguments to find a Obra
     * @example
     * // Get one Obra
     * const obra = await prisma.obra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ObraFindFirstOrThrowArgs>(args?: SelectSubset<T, ObraFindFirstOrThrowArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Obras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Obras
     * const obras = await prisma.obra.findMany()
     * 
     * // Get first 10 Obras
     * const obras = await prisma.obra.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const obraWithIdOnly = await prisma.obra.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ObraFindManyArgs>(args?: SelectSubset<T, ObraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Obra.
     * @param {ObraCreateArgs} args - Arguments to create a Obra.
     * @example
     * // Create one Obra
     * const Obra = await prisma.obra.create({
     *   data: {
     *     // ... data to create a Obra
     *   }
     * })
     * 
     */
    create<T extends ObraCreateArgs>(args: SelectSubset<T, ObraCreateArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Obras.
     * @param {ObraCreateManyArgs} args - Arguments to create many Obras.
     * @example
     * // Create many Obras
     * const obra = await prisma.obra.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ObraCreateManyArgs>(args?: SelectSubset<T, ObraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Obras and returns the data saved in the database.
     * @param {ObraCreateManyAndReturnArgs} args - Arguments to create many Obras.
     * @example
     * // Create many Obras
     * const obra = await prisma.obra.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Obras and only return the `id`
     * const obraWithIdOnly = await prisma.obra.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ObraCreateManyAndReturnArgs>(args?: SelectSubset<T, ObraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Obra.
     * @param {ObraDeleteArgs} args - Arguments to delete one Obra.
     * @example
     * // Delete one Obra
     * const Obra = await prisma.obra.delete({
     *   where: {
     *     // ... filter to delete one Obra
     *   }
     * })
     * 
     */
    delete<T extends ObraDeleteArgs>(args: SelectSubset<T, ObraDeleteArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Obra.
     * @param {ObraUpdateArgs} args - Arguments to update one Obra.
     * @example
     * // Update one Obra
     * const obra = await prisma.obra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ObraUpdateArgs>(args: SelectSubset<T, ObraUpdateArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Obras.
     * @param {ObraDeleteManyArgs} args - Arguments to filter Obras to delete.
     * @example
     * // Delete a few Obras
     * const { count } = await prisma.obra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ObraDeleteManyArgs>(args?: SelectSubset<T, ObraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Obras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Obras
     * const obra = await prisma.obra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ObraUpdateManyArgs>(args: SelectSubset<T, ObraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Obras and returns the data updated in the database.
     * @param {ObraUpdateManyAndReturnArgs} args - Arguments to update many Obras.
     * @example
     * // Update many Obras
     * const obra = await prisma.obra.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Obras and only return the `id`
     * const obraWithIdOnly = await prisma.obra.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ObraUpdateManyAndReturnArgs>(args: SelectSubset<T, ObraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Obra.
     * @param {ObraUpsertArgs} args - Arguments to update or create a Obra.
     * @example
     * // Update or create a Obra
     * const obra = await prisma.obra.upsert({
     *   create: {
     *     // ... data to create a Obra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Obra we want to update
     *   }
     * })
     */
    upsert<T extends ObraUpsertArgs>(args: SelectSubset<T, ObraUpsertArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Obras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraCountArgs} args - Arguments to filter Obras to count.
     * @example
     * // Count the number of Obras
     * const count = await prisma.obra.count({
     *   where: {
     *     // ... the filter for the Obras we want to count
     *   }
     * })
    **/
    count<T extends ObraCountArgs>(
      args?: Subset<T, ObraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ObraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Obra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ObraAggregateArgs>(args: Subset<T, ObraAggregateArgs>): Prisma.PrismaPromise<GetObraAggregateType<T>>

    /**
     * Group by Obra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ObraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ObraGroupByArgs['orderBy'] }
        : { orderBy?: ObraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ObraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Obra model
   */
  readonly fields: ObraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Obra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ObraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    partesTrabajo<T extends Obra$partesTrabajoArgs<ExtArgs> = {}>(args?: Subset<T, Obra$partesTrabajoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParteDeTrabajoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Obra model
   */
  interface ObraFieldRefs {
    readonly id: FieldRef<"Obra", 'String'>
    readonly nombre: FieldRef<"Obra", 'String'>
    readonly direccion: FieldRef<"Obra", 'String'>
    readonly codigoPostal: FieldRef<"Obra", 'String'>
    readonly ciudad: FieldRef<"Obra", 'String'>
    readonly provincia: FieldRef<"Obra", 'String'>
    readonly estado: FieldRef<"Obra", 'String'>
    readonly fechaInicio: FieldRef<"Obra", 'DateTime'>
    readonly fechaFin: FieldRef<"Obra", 'DateTime'>
    readonly createdAt: FieldRef<"Obra", 'DateTime'>
    readonly updatedAt: FieldRef<"Obra", 'DateTime'>
    readonly clienteId: FieldRef<"Obra", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Obra findUnique
   */
  export type ObraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * Filter, which Obra to fetch.
     */
    where: ObraWhereUniqueInput
  }

  /**
   * Obra findUniqueOrThrow
   */
  export type ObraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * Filter, which Obra to fetch.
     */
    where: ObraWhereUniqueInput
  }

  /**
   * Obra findFirst
   */
  export type ObraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * Filter, which Obra to fetch.
     */
    where?: ObraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obras to fetch.
     */
    orderBy?: ObraOrderByWithRelationInput | ObraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Obras.
     */
    cursor?: ObraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Obras.
     */
    distinct?: ObraScalarFieldEnum | ObraScalarFieldEnum[]
  }

  /**
   * Obra findFirstOrThrow
   */
  export type ObraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * Filter, which Obra to fetch.
     */
    where?: ObraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obras to fetch.
     */
    orderBy?: ObraOrderByWithRelationInput | ObraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Obras.
     */
    cursor?: ObraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Obras.
     */
    distinct?: ObraScalarFieldEnum | ObraScalarFieldEnum[]
  }

  /**
   * Obra findMany
   */
  export type ObraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * Filter, which Obras to fetch.
     */
    where?: ObraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obras to fetch.
     */
    orderBy?: ObraOrderByWithRelationInput | ObraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Obras.
     */
    cursor?: ObraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obras.
     */
    skip?: number
    distinct?: ObraScalarFieldEnum | ObraScalarFieldEnum[]
  }

  /**
   * Obra create
   */
  export type ObraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * The data needed to create a Obra.
     */
    data: XOR<ObraCreateInput, ObraUncheckedCreateInput>
  }

  /**
   * Obra createMany
   */
  export type ObraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Obras.
     */
    data: ObraCreateManyInput | ObraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Obra createManyAndReturn
   */
  export type ObraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * The data used to create many Obras.
     */
    data: ObraCreateManyInput | ObraCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Obra update
   */
  export type ObraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * The data needed to update a Obra.
     */
    data: XOR<ObraUpdateInput, ObraUncheckedUpdateInput>
    /**
     * Choose, which Obra to update.
     */
    where: ObraWhereUniqueInput
  }

  /**
   * Obra updateMany
   */
  export type ObraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Obras.
     */
    data: XOR<ObraUpdateManyMutationInput, ObraUncheckedUpdateManyInput>
    /**
     * Filter which Obras to update
     */
    where?: ObraWhereInput
    /**
     * Limit how many Obras to update.
     */
    limit?: number
  }

  /**
   * Obra updateManyAndReturn
   */
  export type ObraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * The data used to update Obras.
     */
    data: XOR<ObraUpdateManyMutationInput, ObraUncheckedUpdateManyInput>
    /**
     * Filter which Obras to update
     */
    where?: ObraWhereInput
    /**
     * Limit how many Obras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Obra upsert
   */
  export type ObraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * The filter to search for the Obra to update in case it exists.
     */
    where: ObraWhereUniqueInput
    /**
     * In case the Obra found by the `where` argument doesn't exist, create a new Obra with this data.
     */
    create: XOR<ObraCreateInput, ObraUncheckedCreateInput>
    /**
     * In case the Obra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ObraUpdateInput, ObraUncheckedUpdateInput>
  }

  /**
   * Obra delete
   */
  export type ObraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * Filter which Obra to delete.
     */
    where: ObraWhereUniqueInput
  }

  /**
   * Obra deleteMany
   */
  export type ObraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Obras to delete
     */
    where?: ObraWhereInput
    /**
     * Limit how many Obras to delete.
     */
    limit?: number
  }

  /**
   * Obra.partesTrabajo
   */
  export type Obra$partesTrabajoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParteDeTrabajo
     */
    select?: ParteDeTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParteDeTrabajo
     */
    omit?: ParteDeTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParteDeTrabajoInclude<ExtArgs> | null
    where?: ParteDeTrabajoWhereInput
    orderBy?: ParteDeTrabajoOrderByWithRelationInput | ParteDeTrabajoOrderByWithRelationInput[]
    cursor?: ParteDeTrabajoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParteDeTrabajoScalarFieldEnum | ParteDeTrabajoScalarFieldEnum[]
  }

  /**
   * Obra without action
   */
  export type ObraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
  }


  /**
   * Model Transportista
   */

  export type AggregateTransportista = {
    _count: TransportistaCountAggregateOutputType | null
    _min: TransportistaMinAggregateOutputType | null
    _max: TransportistaMaxAggregateOutputType | null
  }

  export type TransportistaMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    cif: string | null
    direccion: string | null
    telefono: string | null
    email: string | null
    contacto: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransportistaMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    cif: string | null
    direccion: string | null
    telefono: string | null
    email: string | null
    contacto: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransportistaCountAggregateOutputType = {
    id: number
    nombre: number
    cif: number
    direccion: number
    telefono: number
    email: number
    contacto: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransportistaMinAggregateInputType = {
    id?: true
    nombre?: true
    cif?: true
    direccion?: true
    telefono?: true
    email?: true
    contacto?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransportistaMaxAggregateInputType = {
    id?: true
    nombre?: true
    cif?: true
    direccion?: true
    telefono?: true
    email?: true
    contacto?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransportistaCountAggregateInputType = {
    id?: true
    nombre?: true
    cif?: true
    direccion?: true
    telefono?: true
    email?: true
    contacto?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransportistaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transportista to aggregate.
     */
    where?: TransportistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transportistas to fetch.
     */
    orderBy?: TransportistaOrderByWithRelationInput | TransportistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransportistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transportistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transportistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transportistas
    **/
    _count?: true | TransportistaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransportistaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransportistaMaxAggregateInputType
  }

  export type GetTransportistaAggregateType<T extends TransportistaAggregateArgs> = {
        [P in keyof T & keyof AggregateTransportista]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransportista[P]>
      : GetScalarType<T[P], AggregateTransportista[P]>
  }




  export type TransportistaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransportistaWhereInput
    orderBy?: TransportistaOrderByWithAggregationInput | TransportistaOrderByWithAggregationInput[]
    by: TransportistaScalarFieldEnum[] | TransportistaScalarFieldEnum
    having?: TransportistaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransportistaCountAggregateInputType | true
    _min?: TransportistaMinAggregateInputType
    _max?: TransportistaMaxAggregateInputType
  }

  export type TransportistaGroupByOutputType = {
    id: string
    nombre: string
    cif: string
    direccion: string | null
    telefono: string | null
    email: string | null
    contacto: string | null
    createdAt: Date
    updatedAt: Date
    _count: TransportistaCountAggregateOutputType | null
    _min: TransportistaMinAggregateOutputType | null
    _max: TransportistaMaxAggregateOutputType | null
  }

  type GetTransportistaGroupByPayload<T extends TransportistaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransportistaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransportistaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransportistaGroupByOutputType[P]>
            : GetScalarType<T[P], TransportistaGroupByOutputType[P]>
        }
      >
    >


  export type TransportistaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    cif?: boolean
    direccion?: boolean
    telefono?: boolean
    email?: boolean
    contacto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehiculos?: boolean | Transportista$vehiculosArgs<ExtArgs>
    _count?: boolean | TransportistaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transportista"]>

  export type TransportistaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    cif?: boolean
    direccion?: boolean
    telefono?: boolean
    email?: boolean
    contacto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["transportista"]>

  export type TransportistaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    cif?: boolean
    direccion?: boolean
    telefono?: boolean
    email?: boolean
    contacto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["transportista"]>

  export type TransportistaSelectScalar = {
    id?: boolean
    nombre?: boolean
    cif?: boolean
    direccion?: boolean
    telefono?: boolean
    email?: boolean
    contacto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransportistaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "cif" | "direccion" | "telefono" | "email" | "contacto" | "createdAt" | "updatedAt", ExtArgs["result"]["transportista"]>
  export type TransportistaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehiculos?: boolean | Transportista$vehiculosArgs<ExtArgs>
    _count?: boolean | TransportistaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TransportistaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TransportistaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TransportistaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transportista"
    objects: {
      vehiculos: Prisma.$VehiculoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      cif: string
      direccion: string | null
      telefono: string | null
      email: string | null
      contacto: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transportista"]>
    composites: {}
  }

  type TransportistaGetPayload<S extends boolean | null | undefined | TransportistaDefaultArgs> = $Result.GetResult<Prisma.$TransportistaPayload, S>

  type TransportistaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransportistaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransportistaCountAggregateInputType | true
    }

  export interface TransportistaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transportista'], meta: { name: 'Transportista' } }
    /**
     * Find zero or one Transportista that matches the filter.
     * @param {TransportistaFindUniqueArgs} args - Arguments to find a Transportista
     * @example
     * // Get one Transportista
     * const transportista = await prisma.transportista.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransportistaFindUniqueArgs>(args: SelectSubset<T, TransportistaFindUniqueArgs<ExtArgs>>): Prisma__TransportistaClient<$Result.GetResult<Prisma.$TransportistaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transportista that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransportistaFindUniqueOrThrowArgs} args - Arguments to find a Transportista
     * @example
     * // Get one Transportista
     * const transportista = await prisma.transportista.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransportistaFindUniqueOrThrowArgs>(args: SelectSubset<T, TransportistaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransportistaClient<$Result.GetResult<Prisma.$TransportistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transportista that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportistaFindFirstArgs} args - Arguments to find a Transportista
     * @example
     * // Get one Transportista
     * const transportista = await prisma.transportista.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransportistaFindFirstArgs>(args?: SelectSubset<T, TransportistaFindFirstArgs<ExtArgs>>): Prisma__TransportistaClient<$Result.GetResult<Prisma.$TransportistaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transportista that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportistaFindFirstOrThrowArgs} args - Arguments to find a Transportista
     * @example
     * // Get one Transportista
     * const transportista = await prisma.transportista.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransportistaFindFirstOrThrowArgs>(args?: SelectSubset<T, TransportistaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransportistaClient<$Result.GetResult<Prisma.$TransportistaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transportistas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportistaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transportistas
     * const transportistas = await prisma.transportista.findMany()
     * 
     * // Get first 10 Transportistas
     * const transportistas = await prisma.transportista.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transportistaWithIdOnly = await prisma.transportista.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransportistaFindManyArgs>(args?: SelectSubset<T, TransportistaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportistaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transportista.
     * @param {TransportistaCreateArgs} args - Arguments to create a Transportista.
     * @example
     * // Create one Transportista
     * const Transportista = await prisma.transportista.create({
     *   data: {
     *     // ... data to create a Transportista
     *   }
     * })
     * 
     */
    create<T extends TransportistaCreateArgs>(args: SelectSubset<T, TransportistaCreateArgs<ExtArgs>>): Prisma__TransportistaClient<$Result.GetResult<Prisma.$TransportistaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transportistas.
     * @param {TransportistaCreateManyArgs} args - Arguments to create many Transportistas.
     * @example
     * // Create many Transportistas
     * const transportista = await prisma.transportista.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransportistaCreateManyArgs>(args?: SelectSubset<T, TransportistaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transportistas and returns the data saved in the database.
     * @param {TransportistaCreateManyAndReturnArgs} args - Arguments to create many Transportistas.
     * @example
     * // Create many Transportistas
     * const transportista = await prisma.transportista.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transportistas and only return the `id`
     * const transportistaWithIdOnly = await prisma.transportista.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransportistaCreateManyAndReturnArgs>(args?: SelectSubset<T, TransportistaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportistaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transportista.
     * @param {TransportistaDeleteArgs} args - Arguments to delete one Transportista.
     * @example
     * // Delete one Transportista
     * const Transportista = await prisma.transportista.delete({
     *   where: {
     *     // ... filter to delete one Transportista
     *   }
     * })
     * 
     */
    delete<T extends TransportistaDeleteArgs>(args: SelectSubset<T, TransportistaDeleteArgs<ExtArgs>>): Prisma__TransportistaClient<$Result.GetResult<Prisma.$TransportistaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transportista.
     * @param {TransportistaUpdateArgs} args - Arguments to update one Transportista.
     * @example
     * // Update one Transportista
     * const transportista = await prisma.transportista.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransportistaUpdateArgs>(args: SelectSubset<T, TransportistaUpdateArgs<ExtArgs>>): Prisma__TransportistaClient<$Result.GetResult<Prisma.$TransportistaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transportistas.
     * @param {TransportistaDeleteManyArgs} args - Arguments to filter Transportistas to delete.
     * @example
     * // Delete a few Transportistas
     * const { count } = await prisma.transportista.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransportistaDeleteManyArgs>(args?: SelectSubset<T, TransportistaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transportistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportistaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transportistas
     * const transportista = await prisma.transportista.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransportistaUpdateManyArgs>(args: SelectSubset<T, TransportistaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transportistas and returns the data updated in the database.
     * @param {TransportistaUpdateManyAndReturnArgs} args - Arguments to update many Transportistas.
     * @example
     * // Update many Transportistas
     * const transportista = await prisma.transportista.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transportistas and only return the `id`
     * const transportistaWithIdOnly = await prisma.transportista.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransportistaUpdateManyAndReturnArgs>(args: SelectSubset<T, TransportistaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportistaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transportista.
     * @param {TransportistaUpsertArgs} args - Arguments to update or create a Transportista.
     * @example
     * // Update or create a Transportista
     * const transportista = await prisma.transportista.upsert({
     *   create: {
     *     // ... data to create a Transportista
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transportista we want to update
     *   }
     * })
     */
    upsert<T extends TransportistaUpsertArgs>(args: SelectSubset<T, TransportistaUpsertArgs<ExtArgs>>): Prisma__TransportistaClient<$Result.GetResult<Prisma.$TransportistaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transportistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportistaCountArgs} args - Arguments to filter Transportistas to count.
     * @example
     * // Count the number of Transportistas
     * const count = await prisma.transportista.count({
     *   where: {
     *     // ... the filter for the Transportistas we want to count
     *   }
     * })
    **/
    count<T extends TransportistaCountArgs>(
      args?: Subset<T, TransportistaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransportistaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transportista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportistaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransportistaAggregateArgs>(args: Subset<T, TransportistaAggregateArgs>): Prisma.PrismaPromise<GetTransportistaAggregateType<T>>

    /**
     * Group by Transportista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportistaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransportistaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransportistaGroupByArgs['orderBy'] }
        : { orderBy?: TransportistaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransportistaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransportistaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transportista model
   */
  readonly fields: TransportistaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transportista.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransportistaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehiculos<T extends Transportista$vehiculosArgs<ExtArgs> = {}>(args?: Subset<T, Transportista$vehiculosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transportista model
   */
  interface TransportistaFieldRefs {
    readonly id: FieldRef<"Transportista", 'String'>
    readonly nombre: FieldRef<"Transportista", 'String'>
    readonly cif: FieldRef<"Transportista", 'String'>
    readonly direccion: FieldRef<"Transportista", 'String'>
    readonly telefono: FieldRef<"Transportista", 'String'>
    readonly email: FieldRef<"Transportista", 'String'>
    readonly contacto: FieldRef<"Transportista", 'String'>
    readonly createdAt: FieldRef<"Transportista", 'DateTime'>
    readonly updatedAt: FieldRef<"Transportista", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transportista findUnique
   */
  export type TransportistaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportista
     */
    select?: TransportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportista
     */
    omit?: TransportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportistaInclude<ExtArgs> | null
    /**
     * Filter, which Transportista to fetch.
     */
    where: TransportistaWhereUniqueInput
  }

  /**
   * Transportista findUniqueOrThrow
   */
  export type TransportistaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportista
     */
    select?: TransportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportista
     */
    omit?: TransportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportistaInclude<ExtArgs> | null
    /**
     * Filter, which Transportista to fetch.
     */
    where: TransportistaWhereUniqueInput
  }

  /**
   * Transportista findFirst
   */
  export type TransportistaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportista
     */
    select?: TransportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportista
     */
    omit?: TransportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportistaInclude<ExtArgs> | null
    /**
     * Filter, which Transportista to fetch.
     */
    where?: TransportistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transportistas to fetch.
     */
    orderBy?: TransportistaOrderByWithRelationInput | TransportistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transportistas.
     */
    cursor?: TransportistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transportistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transportistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transportistas.
     */
    distinct?: TransportistaScalarFieldEnum | TransportistaScalarFieldEnum[]
  }

  /**
   * Transportista findFirstOrThrow
   */
  export type TransportistaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportista
     */
    select?: TransportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportista
     */
    omit?: TransportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportistaInclude<ExtArgs> | null
    /**
     * Filter, which Transportista to fetch.
     */
    where?: TransportistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transportistas to fetch.
     */
    orderBy?: TransportistaOrderByWithRelationInput | TransportistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transportistas.
     */
    cursor?: TransportistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transportistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transportistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transportistas.
     */
    distinct?: TransportistaScalarFieldEnum | TransportistaScalarFieldEnum[]
  }

  /**
   * Transportista findMany
   */
  export type TransportistaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportista
     */
    select?: TransportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportista
     */
    omit?: TransportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportistaInclude<ExtArgs> | null
    /**
     * Filter, which Transportistas to fetch.
     */
    where?: TransportistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transportistas to fetch.
     */
    orderBy?: TransportistaOrderByWithRelationInput | TransportistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transportistas.
     */
    cursor?: TransportistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transportistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transportistas.
     */
    skip?: number
    distinct?: TransportistaScalarFieldEnum | TransportistaScalarFieldEnum[]
  }

  /**
   * Transportista create
   */
  export type TransportistaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportista
     */
    select?: TransportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportista
     */
    omit?: TransportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportistaInclude<ExtArgs> | null
    /**
     * The data needed to create a Transportista.
     */
    data: XOR<TransportistaCreateInput, TransportistaUncheckedCreateInput>
  }

  /**
   * Transportista createMany
   */
  export type TransportistaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transportistas.
     */
    data: TransportistaCreateManyInput | TransportistaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transportista createManyAndReturn
   */
  export type TransportistaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportista
     */
    select?: TransportistaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transportista
     */
    omit?: TransportistaOmit<ExtArgs> | null
    /**
     * The data used to create many Transportistas.
     */
    data: TransportistaCreateManyInput | TransportistaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transportista update
   */
  export type TransportistaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportista
     */
    select?: TransportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportista
     */
    omit?: TransportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportistaInclude<ExtArgs> | null
    /**
     * The data needed to update a Transportista.
     */
    data: XOR<TransportistaUpdateInput, TransportistaUncheckedUpdateInput>
    /**
     * Choose, which Transportista to update.
     */
    where: TransportistaWhereUniqueInput
  }

  /**
   * Transportista updateMany
   */
  export type TransportistaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transportistas.
     */
    data: XOR<TransportistaUpdateManyMutationInput, TransportistaUncheckedUpdateManyInput>
    /**
     * Filter which Transportistas to update
     */
    where?: TransportistaWhereInput
    /**
     * Limit how many Transportistas to update.
     */
    limit?: number
  }

  /**
   * Transportista updateManyAndReturn
   */
  export type TransportistaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportista
     */
    select?: TransportistaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transportista
     */
    omit?: TransportistaOmit<ExtArgs> | null
    /**
     * The data used to update Transportistas.
     */
    data: XOR<TransportistaUpdateManyMutationInput, TransportistaUncheckedUpdateManyInput>
    /**
     * Filter which Transportistas to update
     */
    where?: TransportistaWhereInput
    /**
     * Limit how many Transportistas to update.
     */
    limit?: number
  }

  /**
   * Transportista upsert
   */
  export type TransportistaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportista
     */
    select?: TransportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportista
     */
    omit?: TransportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportistaInclude<ExtArgs> | null
    /**
     * The filter to search for the Transportista to update in case it exists.
     */
    where: TransportistaWhereUniqueInput
    /**
     * In case the Transportista found by the `where` argument doesn't exist, create a new Transportista with this data.
     */
    create: XOR<TransportistaCreateInput, TransportistaUncheckedCreateInput>
    /**
     * In case the Transportista was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransportistaUpdateInput, TransportistaUncheckedUpdateInput>
  }

  /**
   * Transportista delete
   */
  export type TransportistaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportista
     */
    select?: TransportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportista
     */
    omit?: TransportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportistaInclude<ExtArgs> | null
    /**
     * Filter which Transportista to delete.
     */
    where: TransportistaWhereUniqueInput
  }

  /**
   * Transportista deleteMany
   */
  export type TransportistaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transportistas to delete
     */
    where?: TransportistaWhereInput
    /**
     * Limit how many Transportistas to delete.
     */
    limit?: number
  }

  /**
   * Transportista.vehiculos
   */
  export type Transportista$vehiculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    where?: VehiculoWhereInput
    orderBy?: VehiculoOrderByWithRelationInput | VehiculoOrderByWithRelationInput[]
    cursor?: VehiculoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehiculoScalarFieldEnum | VehiculoScalarFieldEnum[]
  }

  /**
   * Transportista without action
   */
  export type TransportistaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportista
     */
    select?: TransportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportista
     */
    omit?: TransportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportistaInclude<ExtArgs> | null
  }


  /**
   * Model Vehiculo
   */

  export type AggregateVehiculo = {
    _count: VehiculoCountAggregateOutputType | null
    _avg: VehiculoAvgAggregateOutputType | null
    _sum: VehiculoSumAggregateOutputType | null
    _min: VehiculoMinAggregateOutputType | null
    _max: VehiculoMaxAggregateOutputType | null
  }

  export type VehiculoAvgAggregateOutputType = {
    capacidad: number | null
    año: number | null
  }

  export type VehiculoSumAggregateOutputType = {
    capacidad: number | null
    año: number | null
  }

  export type VehiculoMinAggregateOutputType = {
    id: string | null
    matricula: string | null
    tipo: $Enums.TipoVehiculo | null
    marca: string | null
    modelo: string | null
    capacidad: number | null
    año: number | null
    createdAt: Date | null
    updatedAt: Date | null
    transportistaId: string | null
  }

  export type VehiculoMaxAggregateOutputType = {
    id: string | null
    matricula: string | null
    tipo: $Enums.TipoVehiculo | null
    marca: string | null
    modelo: string | null
    capacidad: number | null
    año: number | null
    createdAt: Date | null
    updatedAt: Date | null
    transportistaId: string | null
  }

  export type VehiculoCountAggregateOutputType = {
    id: number
    matricula: number
    tipo: number
    marca: number
    modelo: number
    capacidad: number
    año: number
    createdAt: number
    updatedAt: number
    transportistaId: number
    _all: number
  }


  export type VehiculoAvgAggregateInputType = {
    capacidad?: true
    año?: true
  }

  export type VehiculoSumAggregateInputType = {
    capacidad?: true
    año?: true
  }

  export type VehiculoMinAggregateInputType = {
    id?: true
    matricula?: true
    tipo?: true
    marca?: true
    modelo?: true
    capacidad?: true
    año?: true
    createdAt?: true
    updatedAt?: true
    transportistaId?: true
  }

  export type VehiculoMaxAggregateInputType = {
    id?: true
    matricula?: true
    tipo?: true
    marca?: true
    modelo?: true
    capacidad?: true
    año?: true
    createdAt?: true
    updatedAt?: true
    transportistaId?: true
  }

  export type VehiculoCountAggregateInputType = {
    id?: true
    matricula?: true
    tipo?: true
    marca?: true
    modelo?: true
    capacidad?: true
    año?: true
    createdAt?: true
    updatedAt?: true
    transportistaId?: true
    _all?: true
  }

  export type VehiculoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehiculo to aggregate.
     */
    where?: VehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehiculos to fetch.
     */
    orderBy?: VehiculoOrderByWithRelationInput | VehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehiculos
    **/
    _count?: true | VehiculoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehiculoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehiculoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehiculoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehiculoMaxAggregateInputType
  }

  export type GetVehiculoAggregateType<T extends VehiculoAggregateArgs> = {
        [P in keyof T & keyof AggregateVehiculo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehiculo[P]>
      : GetScalarType<T[P], AggregateVehiculo[P]>
  }




  export type VehiculoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehiculoWhereInput
    orderBy?: VehiculoOrderByWithAggregationInput | VehiculoOrderByWithAggregationInput[]
    by: VehiculoScalarFieldEnum[] | VehiculoScalarFieldEnum
    having?: VehiculoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehiculoCountAggregateInputType | true
    _avg?: VehiculoAvgAggregateInputType
    _sum?: VehiculoSumAggregateInputType
    _min?: VehiculoMinAggregateInputType
    _max?: VehiculoMaxAggregateInputType
  }

  export type VehiculoGroupByOutputType = {
    id: string
    matricula: string
    tipo: $Enums.TipoVehiculo
    marca: string
    modelo: string
    capacidad: number | null
    año: number | null
    createdAt: Date
    updatedAt: Date
    transportistaId: string | null
    _count: VehiculoCountAggregateOutputType | null
    _avg: VehiculoAvgAggregateOutputType | null
    _sum: VehiculoSumAggregateOutputType | null
    _min: VehiculoMinAggregateOutputType | null
    _max: VehiculoMaxAggregateOutputType | null
  }

  type GetVehiculoGroupByPayload<T extends VehiculoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehiculoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehiculoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehiculoGroupByOutputType[P]>
            : GetScalarType<T[P], VehiculoGroupByOutputType[P]>
        }
      >
    >


  export type VehiculoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matricula?: boolean
    tipo?: boolean
    marca?: boolean
    modelo?: boolean
    capacidad?: boolean
    año?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transportistaId?: boolean
    transportista?: boolean | Vehiculo$transportistaArgs<ExtArgs>
    partesTrabajo?: boolean | Vehiculo$partesTrabajoArgs<ExtArgs>
    lineasParte?: boolean | Vehiculo$lineasParteArgs<ExtArgs>
    _count?: boolean | VehiculoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehiculo"]>

  export type VehiculoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matricula?: boolean
    tipo?: boolean
    marca?: boolean
    modelo?: boolean
    capacidad?: boolean
    año?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transportistaId?: boolean
    transportista?: boolean | Vehiculo$transportistaArgs<ExtArgs>
  }, ExtArgs["result"]["vehiculo"]>

  export type VehiculoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matricula?: boolean
    tipo?: boolean
    marca?: boolean
    modelo?: boolean
    capacidad?: boolean
    año?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transportistaId?: boolean
    transportista?: boolean | Vehiculo$transportistaArgs<ExtArgs>
  }, ExtArgs["result"]["vehiculo"]>

  export type VehiculoSelectScalar = {
    id?: boolean
    matricula?: boolean
    tipo?: boolean
    marca?: boolean
    modelo?: boolean
    capacidad?: boolean
    año?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transportistaId?: boolean
  }

  export type VehiculoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "matricula" | "tipo" | "marca" | "modelo" | "capacidad" | "año" | "createdAt" | "updatedAt" | "transportistaId", ExtArgs["result"]["vehiculo"]>
  export type VehiculoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transportista?: boolean | Vehiculo$transportistaArgs<ExtArgs>
    partesTrabajo?: boolean | Vehiculo$partesTrabajoArgs<ExtArgs>
    lineasParte?: boolean | Vehiculo$lineasParteArgs<ExtArgs>
    _count?: boolean | VehiculoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehiculoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transportista?: boolean | Vehiculo$transportistaArgs<ExtArgs>
  }
  export type VehiculoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transportista?: boolean | Vehiculo$transportistaArgs<ExtArgs>
  }

  export type $VehiculoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehiculo"
    objects: {
      transportista: Prisma.$TransportistaPayload<ExtArgs> | null
      partesTrabajo: Prisma.$ParteDeTrabajoPayload<ExtArgs>[]
      lineasParte: Prisma.$LineaPartePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      matricula: string
      tipo: $Enums.TipoVehiculo
      marca: string
      modelo: string
      capacidad: number | null
      año: number | null
      createdAt: Date
      updatedAt: Date
      transportistaId: string | null
    }, ExtArgs["result"]["vehiculo"]>
    composites: {}
  }

  type VehiculoGetPayload<S extends boolean | null | undefined | VehiculoDefaultArgs> = $Result.GetResult<Prisma.$VehiculoPayload, S>

  type VehiculoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehiculoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehiculoCountAggregateInputType | true
    }

  export interface VehiculoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehiculo'], meta: { name: 'Vehiculo' } }
    /**
     * Find zero or one Vehiculo that matches the filter.
     * @param {VehiculoFindUniqueArgs} args - Arguments to find a Vehiculo
     * @example
     * // Get one Vehiculo
     * const vehiculo = await prisma.vehiculo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehiculoFindUniqueArgs>(args: SelectSubset<T, VehiculoFindUniqueArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehiculo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehiculoFindUniqueOrThrowArgs} args - Arguments to find a Vehiculo
     * @example
     * // Get one Vehiculo
     * const vehiculo = await prisma.vehiculo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehiculoFindUniqueOrThrowArgs>(args: SelectSubset<T, VehiculoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehiculo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoFindFirstArgs} args - Arguments to find a Vehiculo
     * @example
     * // Get one Vehiculo
     * const vehiculo = await prisma.vehiculo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehiculoFindFirstArgs>(args?: SelectSubset<T, VehiculoFindFirstArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehiculo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoFindFirstOrThrowArgs} args - Arguments to find a Vehiculo
     * @example
     * // Get one Vehiculo
     * const vehiculo = await prisma.vehiculo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehiculoFindFirstOrThrowArgs>(args?: SelectSubset<T, VehiculoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehiculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehiculos
     * const vehiculos = await prisma.vehiculo.findMany()
     * 
     * // Get first 10 Vehiculos
     * const vehiculos = await prisma.vehiculo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehiculoWithIdOnly = await prisma.vehiculo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehiculoFindManyArgs>(args?: SelectSubset<T, VehiculoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehiculo.
     * @param {VehiculoCreateArgs} args - Arguments to create a Vehiculo.
     * @example
     * // Create one Vehiculo
     * const Vehiculo = await prisma.vehiculo.create({
     *   data: {
     *     // ... data to create a Vehiculo
     *   }
     * })
     * 
     */
    create<T extends VehiculoCreateArgs>(args: SelectSubset<T, VehiculoCreateArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehiculos.
     * @param {VehiculoCreateManyArgs} args - Arguments to create many Vehiculos.
     * @example
     * // Create many Vehiculos
     * const vehiculo = await prisma.vehiculo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehiculoCreateManyArgs>(args?: SelectSubset<T, VehiculoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehiculos and returns the data saved in the database.
     * @param {VehiculoCreateManyAndReturnArgs} args - Arguments to create many Vehiculos.
     * @example
     * // Create many Vehiculos
     * const vehiculo = await prisma.vehiculo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehiculos and only return the `id`
     * const vehiculoWithIdOnly = await prisma.vehiculo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehiculoCreateManyAndReturnArgs>(args?: SelectSubset<T, VehiculoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehiculo.
     * @param {VehiculoDeleteArgs} args - Arguments to delete one Vehiculo.
     * @example
     * // Delete one Vehiculo
     * const Vehiculo = await prisma.vehiculo.delete({
     *   where: {
     *     // ... filter to delete one Vehiculo
     *   }
     * })
     * 
     */
    delete<T extends VehiculoDeleteArgs>(args: SelectSubset<T, VehiculoDeleteArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehiculo.
     * @param {VehiculoUpdateArgs} args - Arguments to update one Vehiculo.
     * @example
     * // Update one Vehiculo
     * const vehiculo = await prisma.vehiculo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehiculoUpdateArgs>(args: SelectSubset<T, VehiculoUpdateArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehiculos.
     * @param {VehiculoDeleteManyArgs} args - Arguments to filter Vehiculos to delete.
     * @example
     * // Delete a few Vehiculos
     * const { count } = await prisma.vehiculo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehiculoDeleteManyArgs>(args?: SelectSubset<T, VehiculoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehiculos
     * const vehiculo = await prisma.vehiculo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehiculoUpdateManyArgs>(args: SelectSubset<T, VehiculoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehiculos and returns the data updated in the database.
     * @param {VehiculoUpdateManyAndReturnArgs} args - Arguments to update many Vehiculos.
     * @example
     * // Update many Vehiculos
     * const vehiculo = await prisma.vehiculo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehiculos and only return the `id`
     * const vehiculoWithIdOnly = await prisma.vehiculo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VehiculoUpdateManyAndReturnArgs>(args: SelectSubset<T, VehiculoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehiculo.
     * @param {VehiculoUpsertArgs} args - Arguments to update or create a Vehiculo.
     * @example
     * // Update or create a Vehiculo
     * const vehiculo = await prisma.vehiculo.upsert({
     *   create: {
     *     // ... data to create a Vehiculo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehiculo we want to update
     *   }
     * })
     */
    upsert<T extends VehiculoUpsertArgs>(args: SelectSubset<T, VehiculoUpsertArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoCountArgs} args - Arguments to filter Vehiculos to count.
     * @example
     * // Count the number of Vehiculos
     * const count = await prisma.vehiculo.count({
     *   where: {
     *     // ... the filter for the Vehiculos we want to count
     *   }
     * })
    **/
    count<T extends VehiculoCountArgs>(
      args?: Subset<T, VehiculoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehiculoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehiculoAggregateArgs>(args: Subset<T, VehiculoAggregateArgs>): Prisma.PrismaPromise<GetVehiculoAggregateType<T>>

    /**
     * Group by Vehiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehiculoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehiculoGroupByArgs['orderBy'] }
        : { orderBy?: VehiculoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehiculoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehiculoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehiculo model
   */
  readonly fields: VehiculoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehiculo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehiculoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transportista<T extends Vehiculo$transportistaArgs<ExtArgs> = {}>(args?: Subset<T, Vehiculo$transportistaArgs<ExtArgs>>): Prisma__TransportistaClient<$Result.GetResult<Prisma.$TransportistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    partesTrabajo<T extends Vehiculo$partesTrabajoArgs<ExtArgs> = {}>(args?: Subset<T, Vehiculo$partesTrabajoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParteDeTrabajoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lineasParte<T extends Vehiculo$lineasParteArgs<ExtArgs> = {}>(args?: Subset<T, Vehiculo$lineasParteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LineaPartePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vehiculo model
   */
  interface VehiculoFieldRefs {
    readonly id: FieldRef<"Vehiculo", 'String'>
    readonly matricula: FieldRef<"Vehiculo", 'String'>
    readonly tipo: FieldRef<"Vehiculo", 'TipoVehiculo'>
    readonly marca: FieldRef<"Vehiculo", 'String'>
    readonly modelo: FieldRef<"Vehiculo", 'String'>
    readonly capacidad: FieldRef<"Vehiculo", 'Float'>
    readonly año: FieldRef<"Vehiculo", 'Int'>
    readonly createdAt: FieldRef<"Vehiculo", 'DateTime'>
    readonly updatedAt: FieldRef<"Vehiculo", 'DateTime'>
    readonly transportistaId: FieldRef<"Vehiculo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vehiculo findUnique
   */
  export type VehiculoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter, which Vehiculo to fetch.
     */
    where: VehiculoWhereUniqueInput
  }

  /**
   * Vehiculo findUniqueOrThrow
   */
  export type VehiculoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter, which Vehiculo to fetch.
     */
    where: VehiculoWhereUniqueInput
  }

  /**
   * Vehiculo findFirst
   */
  export type VehiculoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter, which Vehiculo to fetch.
     */
    where?: VehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehiculos to fetch.
     */
    orderBy?: VehiculoOrderByWithRelationInput | VehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehiculos.
     */
    cursor?: VehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehiculos.
     */
    distinct?: VehiculoScalarFieldEnum | VehiculoScalarFieldEnum[]
  }

  /**
   * Vehiculo findFirstOrThrow
   */
  export type VehiculoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter, which Vehiculo to fetch.
     */
    where?: VehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehiculos to fetch.
     */
    orderBy?: VehiculoOrderByWithRelationInput | VehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehiculos.
     */
    cursor?: VehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehiculos.
     */
    distinct?: VehiculoScalarFieldEnum | VehiculoScalarFieldEnum[]
  }

  /**
   * Vehiculo findMany
   */
  export type VehiculoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter, which Vehiculos to fetch.
     */
    where?: VehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehiculos to fetch.
     */
    orderBy?: VehiculoOrderByWithRelationInput | VehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehiculos.
     */
    cursor?: VehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehiculos.
     */
    skip?: number
    distinct?: VehiculoScalarFieldEnum | VehiculoScalarFieldEnum[]
  }

  /**
   * Vehiculo create
   */
  export type VehiculoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehiculo.
     */
    data: XOR<VehiculoCreateInput, VehiculoUncheckedCreateInput>
  }

  /**
   * Vehiculo createMany
   */
  export type VehiculoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehiculos.
     */
    data: VehiculoCreateManyInput | VehiculoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehiculo createManyAndReturn
   */
  export type VehiculoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * The data used to create many Vehiculos.
     */
    data: VehiculoCreateManyInput | VehiculoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehiculo update
   */
  export type VehiculoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehiculo.
     */
    data: XOR<VehiculoUpdateInput, VehiculoUncheckedUpdateInput>
    /**
     * Choose, which Vehiculo to update.
     */
    where: VehiculoWhereUniqueInput
  }

  /**
   * Vehiculo updateMany
   */
  export type VehiculoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehiculos.
     */
    data: XOR<VehiculoUpdateManyMutationInput, VehiculoUncheckedUpdateManyInput>
    /**
     * Filter which Vehiculos to update
     */
    where?: VehiculoWhereInput
    /**
     * Limit how many Vehiculos to update.
     */
    limit?: number
  }

  /**
   * Vehiculo updateManyAndReturn
   */
  export type VehiculoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * The data used to update Vehiculos.
     */
    data: XOR<VehiculoUpdateManyMutationInput, VehiculoUncheckedUpdateManyInput>
    /**
     * Filter which Vehiculos to update
     */
    where?: VehiculoWhereInput
    /**
     * Limit how many Vehiculos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehiculo upsert
   */
  export type VehiculoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehiculo to update in case it exists.
     */
    where: VehiculoWhereUniqueInput
    /**
     * In case the Vehiculo found by the `where` argument doesn't exist, create a new Vehiculo with this data.
     */
    create: XOR<VehiculoCreateInput, VehiculoUncheckedCreateInput>
    /**
     * In case the Vehiculo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehiculoUpdateInput, VehiculoUncheckedUpdateInput>
  }

  /**
   * Vehiculo delete
   */
  export type VehiculoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter which Vehiculo to delete.
     */
    where: VehiculoWhereUniqueInput
  }

  /**
   * Vehiculo deleteMany
   */
  export type VehiculoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehiculos to delete
     */
    where?: VehiculoWhereInput
    /**
     * Limit how many Vehiculos to delete.
     */
    limit?: number
  }

  /**
   * Vehiculo.transportista
   */
  export type Vehiculo$transportistaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportista
     */
    select?: TransportistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportista
     */
    omit?: TransportistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportistaInclude<ExtArgs> | null
    where?: TransportistaWhereInput
  }

  /**
   * Vehiculo.partesTrabajo
   */
  export type Vehiculo$partesTrabajoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParteDeTrabajo
     */
    select?: ParteDeTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParteDeTrabajo
     */
    omit?: ParteDeTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParteDeTrabajoInclude<ExtArgs> | null
    where?: ParteDeTrabajoWhereInput
    orderBy?: ParteDeTrabajoOrderByWithRelationInput | ParteDeTrabajoOrderByWithRelationInput[]
    cursor?: ParteDeTrabajoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParteDeTrabajoScalarFieldEnum | ParteDeTrabajoScalarFieldEnum[]
  }

  /**
   * Vehiculo.lineasParte
   */
  export type Vehiculo$lineasParteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaParte
     */
    select?: LineaParteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaParte
     */
    omit?: LineaParteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaParteInclude<ExtArgs> | null
    where?: LineaParteWhereInput
    orderBy?: LineaParteOrderByWithRelationInput | LineaParteOrderByWithRelationInput[]
    cursor?: LineaParteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LineaParteScalarFieldEnum | LineaParteScalarFieldEnum[]
  }

  /**
   * Vehiculo without action
   */
  export type VehiculoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
  }


  /**
   * Model Conductor
   */

  export type AggregateConductor = {
    _count: ConductorCountAggregateOutputType | null
    _min: ConductorMinAggregateOutputType | null
    _max: ConductorMaxAggregateOutputType | null
  }

  export type ConductorMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    apellidos: string | null
    dni: string | null
    telefono: string | null
    email: string | null
    licencia: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConductorMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    apellidos: string | null
    dni: string | null
    telefono: string | null
    email: string | null
    licencia: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConductorCountAggregateOutputType = {
    id: number
    nombre: number
    apellidos: number
    dni: number
    telefono: number
    email: number
    licencia: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConductorMinAggregateInputType = {
    id?: true
    nombre?: true
    apellidos?: true
    dni?: true
    telefono?: true
    email?: true
    licencia?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConductorMaxAggregateInputType = {
    id?: true
    nombre?: true
    apellidos?: true
    dni?: true
    telefono?: true
    email?: true
    licencia?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConductorCountAggregateInputType = {
    id?: true
    nombre?: true
    apellidos?: true
    dni?: true
    telefono?: true
    email?: true
    licencia?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConductorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conductor to aggregate.
     */
    where?: ConductorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conductors to fetch.
     */
    orderBy?: ConductorOrderByWithRelationInput | ConductorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConductorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conductors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conductors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conductors
    **/
    _count?: true | ConductorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConductorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConductorMaxAggregateInputType
  }

  export type GetConductorAggregateType<T extends ConductorAggregateArgs> = {
        [P in keyof T & keyof AggregateConductor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConductor[P]>
      : GetScalarType<T[P], AggregateConductor[P]>
  }




  export type ConductorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConductorWhereInput
    orderBy?: ConductorOrderByWithAggregationInput | ConductorOrderByWithAggregationInput[]
    by: ConductorScalarFieldEnum[] | ConductorScalarFieldEnum
    having?: ConductorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConductorCountAggregateInputType | true
    _min?: ConductorMinAggregateInputType
    _max?: ConductorMaxAggregateInputType
  }

  export type ConductorGroupByOutputType = {
    id: string
    nombre: string
    apellidos: string
    dni: string
    telefono: string | null
    email: string | null
    licencia: string | null
    createdAt: Date
    updatedAt: Date
    _count: ConductorCountAggregateOutputType | null
    _min: ConductorMinAggregateOutputType | null
    _max: ConductorMaxAggregateOutputType | null
  }

  type GetConductorGroupByPayload<T extends ConductorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConductorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConductorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConductorGroupByOutputType[P]>
            : GetScalarType<T[P], ConductorGroupByOutputType[P]>
        }
      >
    >


  export type ConductorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellidos?: boolean
    dni?: boolean
    telefono?: boolean
    email?: boolean
    licencia?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    partesTrabajo?: boolean | Conductor$partesTrabajoArgs<ExtArgs>
    jornadas?: boolean | Conductor$jornadasArgs<ExtArgs>
    _count?: boolean | ConductorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conductor"]>

  export type ConductorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellidos?: boolean
    dni?: boolean
    telefono?: boolean
    email?: boolean
    licencia?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["conductor"]>

  export type ConductorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellidos?: boolean
    dni?: boolean
    telefono?: boolean
    email?: boolean
    licencia?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["conductor"]>

  export type ConductorSelectScalar = {
    id?: boolean
    nombre?: boolean
    apellidos?: boolean
    dni?: boolean
    telefono?: boolean
    email?: boolean
    licencia?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConductorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "apellidos" | "dni" | "telefono" | "email" | "licencia" | "createdAt" | "updatedAt", ExtArgs["result"]["conductor"]>
  export type ConductorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partesTrabajo?: boolean | Conductor$partesTrabajoArgs<ExtArgs>
    jornadas?: boolean | Conductor$jornadasArgs<ExtArgs>
    _count?: boolean | ConductorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConductorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ConductorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ConductorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conductor"
    objects: {
      partesTrabajo: Prisma.$ParteDeTrabajoPayload<ExtArgs>[]
      jornadas: Prisma.$JornadaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      apellidos: string
      dni: string
      telefono: string | null
      email: string | null
      licencia: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["conductor"]>
    composites: {}
  }

  type ConductorGetPayload<S extends boolean | null | undefined | ConductorDefaultArgs> = $Result.GetResult<Prisma.$ConductorPayload, S>

  type ConductorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConductorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConductorCountAggregateInputType | true
    }

  export interface ConductorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conductor'], meta: { name: 'Conductor' } }
    /**
     * Find zero or one Conductor that matches the filter.
     * @param {ConductorFindUniqueArgs} args - Arguments to find a Conductor
     * @example
     * // Get one Conductor
     * const conductor = await prisma.conductor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConductorFindUniqueArgs>(args: SelectSubset<T, ConductorFindUniqueArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conductor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConductorFindUniqueOrThrowArgs} args - Arguments to find a Conductor
     * @example
     * // Get one Conductor
     * const conductor = await prisma.conductor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConductorFindUniqueOrThrowArgs>(args: SelectSubset<T, ConductorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conductor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductorFindFirstArgs} args - Arguments to find a Conductor
     * @example
     * // Get one Conductor
     * const conductor = await prisma.conductor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConductorFindFirstArgs>(args?: SelectSubset<T, ConductorFindFirstArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conductor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductorFindFirstOrThrowArgs} args - Arguments to find a Conductor
     * @example
     * // Get one Conductor
     * const conductor = await prisma.conductor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConductorFindFirstOrThrowArgs>(args?: SelectSubset<T, ConductorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conductors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conductors
     * const conductors = await prisma.conductor.findMany()
     * 
     * // Get first 10 Conductors
     * const conductors = await prisma.conductor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conductorWithIdOnly = await prisma.conductor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConductorFindManyArgs>(args?: SelectSubset<T, ConductorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conductor.
     * @param {ConductorCreateArgs} args - Arguments to create a Conductor.
     * @example
     * // Create one Conductor
     * const Conductor = await prisma.conductor.create({
     *   data: {
     *     // ... data to create a Conductor
     *   }
     * })
     * 
     */
    create<T extends ConductorCreateArgs>(args: SelectSubset<T, ConductorCreateArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conductors.
     * @param {ConductorCreateManyArgs} args - Arguments to create many Conductors.
     * @example
     * // Create many Conductors
     * const conductor = await prisma.conductor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConductorCreateManyArgs>(args?: SelectSubset<T, ConductorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conductors and returns the data saved in the database.
     * @param {ConductorCreateManyAndReturnArgs} args - Arguments to create many Conductors.
     * @example
     * // Create many Conductors
     * const conductor = await prisma.conductor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conductors and only return the `id`
     * const conductorWithIdOnly = await prisma.conductor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConductorCreateManyAndReturnArgs>(args?: SelectSubset<T, ConductorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conductor.
     * @param {ConductorDeleteArgs} args - Arguments to delete one Conductor.
     * @example
     * // Delete one Conductor
     * const Conductor = await prisma.conductor.delete({
     *   where: {
     *     // ... filter to delete one Conductor
     *   }
     * })
     * 
     */
    delete<T extends ConductorDeleteArgs>(args: SelectSubset<T, ConductorDeleteArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conductor.
     * @param {ConductorUpdateArgs} args - Arguments to update one Conductor.
     * @example
     * // Update one Conductor
     * const conductor = await prisma.conductor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConductorUpdateArgs>(args: SelectSubset<T, ConductorUpdateArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conductors.
     * @param {ConductorDeleteManyArgs} args - Arguments to filter Conductors to delete.
     * @example
     * // Delete a few Conductors
     * const { count } = await prisma.conductor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConductorDeleteManyArgs>(args?: SelectSubset<T, ConductorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conductors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conductors
     * const conductor = await prisma.conductor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConductorUpdateManyArgs>(args: SelectSubset<T, ConductorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conductors and returns the data updated in the database.
     * @param {ConductorUpdateManyAndReturnArgs} args - Arguments to update many Conductors.
     * @example
     * // Update many Conductors
     * const conductor = await prisma.conductor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conductors and only return the `id`
     * const conductorWithIdOnly = await prisma.conductor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConductorUpdateManyAndReturnArgs>(args: SelectSubset<T, ConductorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conductor.
     * @param {ConductorUpsertArgs} args - Arguments to update or create a Conductor.
     * @example
     * // Update or create a Conductor
     * const conductor = await prisma.conductor.upsert({
     *   create: {
     *     // ... data to create a Conductor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conductor we want to update
     *   }
     * })
     */
    upsert<T extends ConductorUpsertArgs>(args: SelectSubset<T, ConductorUpsertArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conductors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductorCountArgs} args - Arguments to filter Conductors to count.
     * @example
     * // Count the number of Conductors
     * const count = await prisma.conductor.count({
     *   where: {
     *     // ... the filter for the Conductors we want to count
     *   }
     * })
    **/
    count<T extends ConductorCountArgs>(
      args?: Subset<T, ConductorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConductorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conductor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConductorAggregateArgs>(args: Subset<T, ConductorAggregateArgs>): Prisma.PrismaPromise<GetConductorAggregateType<T>>

    /**
     * Group by Conductor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConductorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConductorGroupByArgs['orderBy'] }
        : { orderBy?: ConductorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConductorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConductorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conductor model
   */
  readonly fields: ConductorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conductor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConductorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    partesTrabajo<T extends Conductor$partesTrabajoArgs<ExtArgs> = {}>(args?: Subset<T, Conductor$partesTrabajoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParteDeTrabajoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jornadas<T extends Conductor$jornadasArgs<ExtArgs> = {}>(args?: Subset<T, Conductor$jornadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Conductor model
   */
  interface ConductorFieldRefs {
    readonly id: FieldRef<"Conductor", 'String'>
    readonly nombre: FieldRef<"Conductor", 'String'>
    readonly apellidos: FieldRef<"Conductor", 'String'>
    readonly dni: FieldRef<"Conductor", 'String'>
    readonly telefono: FieldRef<"Conductor", 'String'>
    readonly email: FieldRef<"Conductor", 'String'>
    readonly licencia: FieldRef<"Conductor", 'String'>
    readonly createdAt: FieldRef<"Conductor", 'DateTime'>
    readonly updatedAt: FieldRef<"Conductor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Conductor findUnique
   */
  export type ConductorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * Filter, which Conductor to fetch.
     */
    where: ConductorWhereUniqueInput
  }

  /**
   * Conductor findUniqueOrThrow
   */
  export type ConductorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * Filter, which Conductor to fetch.
     */
    where: ConductorWhereUniqueInput
  }

  /**
   * Conductor findFirst
   */
  export type ConductorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * Filter, which Conductor to fetch.
     */
    where?: ConductorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conductors to fetch.
     */
    orderBy?: ConductorOrderByWithRelationInput | ConductorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conductors.
     */
    cursor?: ConductorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conductors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conductors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conductors.
     */
    distinct?: ConductorScalarFieldEnum | ConductorScalarFieldEnum[]
  }

  /**
   * Conductor findFirstOrThrow
   */
  export type ConductorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * Filter, which Conductor to fetch.
     */
    where?: ConductorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conductors to fetch.
     */
    orderBy?: ConductorOrderByWithRelationInput | ConductorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conductors.
     */
    cursor?: ConductorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conductors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conductors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conductors.
     */
    distinct?: ConductorScalarFieldEnum | ConductorScalarFieldEnum[]
  }

  /**
   * Conductor findMany
   */
  export type ConductorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * Filter, which Conductors to fetch.
     */
    where?: ConductorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conductors to fetch.
     */
    orderBy?: ConductorOrderByWithRelationInput | ConductorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conductors.
     */
    cursor?: ConductorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conductors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conductors.
     */
    skip?: number
    distinct?: ConductorScalarFieldEnum | ConductorScalarFieldEnum[]
  }

  /**
   * Conductor create
   */
  export type ConductorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * The data needed to create a Conductor.
     */
    data: XOR<ConductorCreateInput, ConductorUncheckedCreateInput>
  }

  /**
   * Conductor createMany
   */
  export type ConductorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conductors.
     */
    data: ConductorCreateManyInput | ConductorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conductor createManyAndReturn
   */
  export type ConductorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * The data used to create many Conductors.
     */
    data: ConductorCreateManyInput | ConductorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conductor update
   */
  export type ConductorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * The data needed to update a Conductor.
     */
    data: XOR<ConductorUpdateInput, ConductorUncheckedUpdateInput>
    /**
     * Choose, which Conductor to update.
     */
    where: ConductorWhereUniqueInput
  }

  /**
   * Conductor updateMany
   */
  export type ConductorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conductors.
     */
    data: XOR<ConductorUpdateManyMutationInput, ConductorUncheckedUpdateManyInput>
    /**
     * Filter which Conductors to update
     */
    where?: ConductorWhereInput
    /**
     * Limit how many Conductors to update.
     */
    limit?: number
  }

  /**
   * Conductor updateManyAndReturn
   */
  export type ConductorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * The data used to update Conductors.
     */
    data: XOR<ConductorUpdateManyMutationInput, ConductorUncheckedUpdateManyInput>
    /**
     * Filter which Conductors to update
     */
    where?: ConductorWhereInput
    /**
     * Limit how many Conductors to update.
     */
    limit?: number
  }

  /**
   * Conductor upsert
   */
  export type ConductorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * The filter to search for the Conductor to update in case it exists.
     */
    where: ConductorWhereUniqueInput
    /**
     * In case the Conductor found by the `where` argument doesn't exist, create a new Conductor with this data.
     */
    create: XOR<ConductorCreateInput, ConductorUncheckedCreateInput>
    /**
     * In case the Conductor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConductorUpdateInput, ConductorUncheckedUpdateInput>
  }

  /**
   * Conductor delete
   */
  export type ConductorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * Filter which Conductor to delete.
     */
    where: ConductorWhereUniqueInput
  }

  /**
   * Conductor deleteMany
   */
  export type ConductorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conductors to delete
     */
    where?: ConductorWhereInput
    /**
     * Limit how many Conductors to delete.
     */
    limit?: number
  }

  /**
   * Conductor.partesTrabajo
   */
  export type Conductor$partesTrabajoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParteDeTrabajo
     */
    select?: ParteDeTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParteDeTrabajo
     */
    omit?: ParteDeTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParteDeTrabajoInclude<ExtArgs> | null
    where?: ParteDeTrabajoWhereInput
    orderBy?: ParteDeTrabajoOrderByWithRelationInput | ParteDeTrabajoOrderByWithRelationInput[]
    cursor?: ParteDeTrabajoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParteDeTrabajoScalarFieldEnum | ParteDeTrabajoScalarFieldEnum[]
  }

  /**
   * Conductor.jornadas
   */
  export type Conductor$jornadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JornadaInclude<ExtArgs> | null
    where?: JornadaWhereInput
    orderBy?: JornadaOrderByWithRelationInput | JornadaOrderByWithRelationInput[]
    cursor?: JornadaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JornadaScalarFieldEnum | JornadaScalarFieldEnum[]
  }

  /**
   * Conductor without action
   */
  export type ConductorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
  }


  /**
   * Model Material
   */

  export type AggregateMaterial = {
    _count: MaterialCountAggregateOutputType | null
    _avg: MaterialAvgAggregateOutputType | null
    _sum: MaterialSumAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  export type MaterialAvgAggregateOutputType = {
    precio: number | null
  }

  export type MaterialSumAggregateOutputType = {
    precio: number | null
  }

  export type MaterialMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    unidad: string | null
    precio: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaterialMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    unidad: string | null
    precio: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaterialCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    unidad: number
    precio: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MaterialAvgAggregateInputType = {
    precio?: true
  }

  export type MaterialSumAggregateInputType = {
    precio?: true
  }

  export type MaterialMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    unidad?: true
    precio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaterialMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    unidad?: true
    precio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaterialCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    unidad?: true
    precio?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Material to aggregate.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materials
    **/
    _count?: true | MaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaterialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaterialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialMaxAggregateInputType
  }

  export type GetMaterialAggregateType<T extends MaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterial[P]>
      : GetScalarType<T[P], AggregateMaterial[P]>
  }




  export type MaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithAggregationInput | MaterialOrderByWithAggregationInput[]
    by: MaterialScalarFieldEnum[] | MaterialScalarFieldEnum
    having?: MaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialCountAggregateInputType | true
    _avg?: MaterialAvgAggregateInputType
    _sum?: MaterialSumAggregateInputType
    _min?: MaterialMinAggregateInputType
    _max?: MaterialMaxAggregateInputType
  }

  export type MaterialGroupByOutputType = {
    id: string
    nombre: string
    descripcion: string | null
    unidad: string
    precio: number | null
    createdAt: Date
    updatedAt: Date
    _count: MaterialCountAggregateOutputType | null
    _avg: MaterialAvgAggregateOutputType | null
    _sum: MaterialSumAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  type GetMaterialGroupByPayload<T extends MaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialGroupByOutputType[P]>
        }
      >
    >


  export type MaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    unidad?: boolean
    precio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lineasParte?: boolean | Material$lineasParteArgs<ExtArgs>
    _count?: boolean | MaterialCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    unidad?: boolean
    precio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    unidad?: boolean
    precio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    unidad?: boolean
    precio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MaterialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "unidad" | "precio" | "createdAt" | "updatedAt", ExtArgs["result"]["material"]>
  export type MaterialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lineasParte?: boolean | Material$lineasParteArgs<ExtArgs>
    _count?: boolean | MaterialCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MaterialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MaterialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Material"
    objects: {
      lineasParte: Prisma.$LineaPartePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      descripcion: string | null
      unidad: string
      precio: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["material"]>
    composites: {}
  }

  type MaterialGetPayload<S extends boolean | null | undefined | MaterialDefaultArgs> = $Result.GetResult<Prisma.$MaterialPayload, S>

  type MaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaterialCountAggregateInputType | true
    }

  export interface MaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Material'], meta: { name: 'Material' } }
    /**
     * Find zero or one Material that matches the filter.
     * @param {MaterialFindUniqueArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialFindUniqueArgs>(args: SelectSubset<T, MaterialFindUniqueArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Material that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaterialFindUniqueOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, MaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialFindFirstArgs>(args?: SelectSubset<T, MaterialFindFirstArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, MaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materials
     * const materials = await prisma.material.findMany()
     * 
     * // Get first 10 Materials
     * const materials = await prisma.material.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialWithIdOnly = await prisma.material.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaterialFindManyArgs>(args?: SelectSubset<T, MaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Material.
     * @param {MaterialCreateArgs} args - Arguments to create a Material.
     * @example
     * // Create one Material
     * const Material = await prisma.material.create({
     *   data: {
     *     // ... data to create a Material
     *   }
     * })
     * 
     */
    create<T extends MaterialCreateArgs>(args: SelectSubset<T, MaterialCreateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materials.
     * @param {MaterialCreateManyArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaterialCreateManyArgs>(args?: SelectSubset<T, MaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materials and returns the data saved in the database.
     * @param {MaterialCreateManyAndReturnArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaterialCreateManyAndReturnArgs>(args?: SelectSubset<T, MaterialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Material.
     * @param {MaterialDeleteArgs} args - Arguments to delete one Material.
     * @example
     * // Delete one Material
     * const Material = await prisma.material.delete({
     *   where: {
     *     // ... filter to delete one Material
     *   }
     * })
     * 
     */
    delete<T extends MaterialDeleteArgs>(args: SelectSubset<T, MaterialDeleteArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Material.
     * @param {MaterialUpdateArgs} args - Arguments to update one Material.
     * @example
     * // Update one Material
     * const material = await prisma.material.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaterialUpdateArgs>(args: SelectSubset<T, MaterialUpdateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materials.
     * @param {MaterialDeleteManyArgs} args - Arguments to filter Materials to delete.
     * @example
     * // Delete a few Materials
     * const { count } = await prisma.material.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaterialDeleteManyArgs>(args?: SelectSubset<T, MaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaterialUpdateManyArgs>(args: SelectSubset<T, MaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials and returns the data updated in the database.
     * @param {MaterialUpdateManyAndReturnArgs} args - Arguments to update many Materials.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MaterialUpdateManyAndReturnArgs>(args: SelectSubset<T, MaterialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Material.
     * @param {MaterialUpsertArgs} args - Arguments to update or create a Material.
     * @example
     * // Update or create a Material
     * const material = await prisma.material.upsert({
     *   create: {
     *     // ... data to create a Material
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Material we want to update
     *   }
     * })
     */
    upsert<T extends MaterialUpsertArgs>(args: SelectSubset<T, MaterialUpsertArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialCountArgs} args - Arguments to filter Materials to count.
     * @example
     * // Count the number of Materials
     * const count = await prisma.material.count({
     *   where: {
     *     // ... the filter for the Materials we want to count
     *   }
     * })
    **/
    count<T extends MaterialCountArgs>(
      args?: Subset<T, MaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MaterialAggregateArgs>(args: Subset<T, MaterialAggregateArgs>): Prisma.PrismaPromise<GetMaterialAggregateType<T>>

    /**
     * Group by Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterialGroupByArgs['orderBy'] }
        : { orderBy?: MaterialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Material model
   */
  readonly fields: MaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Material.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lineasParte<T extends Material$lineasParteArgs<ExtArgs> = {}>(args?: Subset<T, Material$lineasParteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LineaPartePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Material model
   */
  interface MaterialFieldRefs {
    readonly id: FieldRef<"Material", 'String'>
    readonly nombre: FieldRef<"Material", 'String'>
    readonly descripcion: FieldRef<"Material", 'String'>
    readonly unidad: FieldRef<"Material", 'String'>
    readonly precio: FieldRef<"Material", 'Float'>
    readonly createdAt: FieldRef<"Material", 'DateTime'>
    readonly updatedAt: FieldRef<"Material", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Material findUnique
   */
  export type MaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findUniqueOrThrow
   */
  export type MaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findFirst
   */
  export type MaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findFirstOrThrow
   */
  export type MaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findMany
   */
  export type MaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material create
   */
  export type MaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to create a Material.
     */
    data: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
  }

  /**
   * Material createMany
   */
  export type MaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Material createManyAndReturn
   */
  export type MaterialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Material update
   */
  export type MaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to update a Material.
     */
    data: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
    /**
     * Choose, which Material to update.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material updateMany
   */
  export type MaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to update.
     */
    limit?: number
  }

  /**
   * Material updateManyAndReturn
   */
  export type MaterialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to update.
     */
    limit?: number
  }

  /**
   * Material upsert
   */
  export type MaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The filter to search for the Material to update in case it exists.
     */
    where: MaterialWhereUniqueInput
    /**
     * In case the Material found by the `where` argument doesn't exist, create a new Material with this data.
     */
    create: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
    /**
     * In case the Material was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
  }

  /**
   * Material delete
   */
  export type MaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter which Material to delete.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material deleteMany
   */
  export type MaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materials to delete
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to delete.
     */
    limit?: number
  }

  /**
   * Material.lineasParte
   */
  export type Material$lineasParteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaParte
     */
    select?: LineaParteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaParte
     */
    omit?: LineaParteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaParteInclude<ExtArgs> | null
    where?: LineaParteWhereInput
    orderBy?: LineaParteOrderByWithRelationInput | LineaParteOrderByWithRelationInput[]
    cursor?: LineaParteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LineaParteScalarFieldEnum | LineaParteScalarFieldEnum[]
  }

  /**
   * Material without action
   */
  export type MaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
  }


  /**
   * Model Radio
   */

  export type AggregateRadio = {
    _count: RadioCountAggregateOutputType | null
    _min: RadioMinAggregateOutputType | null
    _max: RadioMaxAggregateOutputType | null
  }

  export type RadioMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    ciudad: string | null
    provincia: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RadioMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    ciudad: string | null
    provincia: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RadioCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    ciudad: number
    provincia: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RadioMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    ciudad?: true
    provincia?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RadioMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    ciudad?: true
    provincia?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RadioCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    ciudad?: true
    provincia?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RadioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Radio to aggregate.
     */
    where?: RadioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Radios to fetch.
     */
    orderBy?: RadioOrderByWithRelationInput | RadioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RadioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Radios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Radios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Radios
    **/
    _count?: true | RadioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RadioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RadioMaxAggregateInputType
  }

  export type GetRadioAggregateType<T extends RadioAggregateArgs> = {
        [P in keyof T & keyof AggregateRadio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRadio[P]>
      : GetScalarType<T[P], AggregateRadio[P]>
  }




  export type RadioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RadioWhereInput
    orderBy?: RadioOrderByWithAggregationInput | RadioOrderByWithAggregationInput[]
    by: RadioScalarFieldEnum[] | RadioScalarFieldEnum
    having?: RadioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RadioCountAggregateInputType | true
    _min?: RadioMinAggregateInputType
    _max?: RadioMaxAggregateInputType
  }

  export type RadioGroupByOutputType = {
    id: string
    nombre: string
    descripcion: string | null
    ciudad: string
    provincia: string
    createdAt: Date
    updatedAt: Date
    _count: RadioCountAggregateOutputType | null
    _min: RadioMinAggregateOutputType | null
    _max: RadioMaxAggregateOutputType | null
  }

  type GetRadioGroupByPayload<T extends RadioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RadioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RadioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RadioGroupByOutputType[P]>
            : GetScalarType<T[P], RadioGroupByOutputType[P]>
        }
      >
    >


  export type RadioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    ciudad?: boolean
    provincia?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    partesTrabajo?: boolean | Radio$partesTrabajoArgs<ExtArgs>
    _count?: boolean | RadioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["radio"]>

  export type RadioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    ciudad?: boolean
    provincia?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["radio"]>

  export type RadioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    ciudad?: boolean
    provincia?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["radio"]>

  export type RadioSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    ciudad?: boolean
    provincia?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RadioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "ciudad" | "provincia" | "createdAt" | "updatedAt", ExtArgs["result"]["radio"]>
  export type RadioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partesTrabajo?: boolean | Radio$partesTrabajoArgs<ExtArgs>
    _count?: boolean | RadioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RadioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RadioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RadioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Radio"
    objects: {
      partesTrabajo: Prisma.$ParteDeTrabajoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      descripcion: string | null
      ciudad: string
      provincia: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["radio"]>
    composites: {}
  }

  type RadioGetPayload<S extends boolean | null | undefined | RadioDefaultArgs> = $Result.GetResult<Prisma.$RadioPayload, S>

  type RadioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RadioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RadioCountAggregateInputType | true
    }

  export interface RadioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Radio'], meta: { name: 'Radio' } }
    /**
     * Find zero or one Radio that matches the filter.
     * @param {RadioFindUniqueArgs} args - Arguments to find a Radio
     * @example
     * // Get one Radio
     * const radio = await prisma.radio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RadioFindUniqueArgs>(args: SelectSubset<T, RadioFindUniqueArgs<ExtArgs>>): Prisma__RadioClient<$Result.GetResult<Prisma.$RadioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Radio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RadioFindUniqueOrThrowArgs} args - Arguments to find a Radio
     * @example
     * // Get one Radio
     * const radio = await prisma.radio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RadioFindUniqueOrThrowArgs>(args: SelectSubset<T, RadioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RadioClient<$Result.GetResult<Prisma.$RadioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Radio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadioFindFirstArgs} args - Arguments to find a Radio
     * @example
     * // Get one Radio
     * const radio = await prisma.radio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RadioFindFirstArgs>(args?: SelectSubset<T, RadioFindFirstArgs<ExtArgs>>): Prisma__RadioClient<$Result.GetResult<Prisma.$RadioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Radio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadioFindFirstOrThrowArgs} args - Arguments to find a Radio
     * @example
     * // Get one Radio
     * const radio = await prisma.radio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RadioFindFirstOrThrowArgs>(args?: SelectSubset<T, RadioFindFirstOrThrowArgs<ExtArgs>>): Prisma__RadioClient<$Result.GetResult<Prisma.$RadioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Radios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Radios
     * const radios = await prisma.radio.findMany()
     * 
     * // Get first 10 Radios
     * const radios = await prisma.radio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const radioWithIdOnly = await prisma.radio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RadioFindManyArgs>(args?: SelectSubset<T, RadioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RadioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Radio.
     * @param {RadioCreateArgs} args - Arguments to create a Radio.
     * @example
     * // Create one Radio
     * const Radio = await prisma.radio.create({
     *   data: {
     *     // ... data to create a Radio
     *   }
     * })
     * 
     */
    create<T extends RadioCreateArgs>(args: SelectSubset<T, RadioCreateArgs<ExtArgs>>): Prisma__RadioClient<$Result.GetResult<Prisma.$RadioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Radios.
     * @param {RadioCreateManyArgs} args - Arguments to create many Radios.
     * @example
     * // Create many Radios
     * const radio = await prisma.radio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RadioCreateManyArgs>(args?: SelectSubset<T, RadioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Radios and returns the data saved in the database.
     * @param {RadioCreateManyAndReturnArgs} args - Arguments to create many Radios.
     * @example
     * // Create many Radios
     * const radio = await prisma.radio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Radios and only return the `id`
     * const radioWithIdOnly = await prisma.radio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RadioCreateManyAndReturnArgs>(args?: SelectSubset<T, RadioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RadioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Radio.
     * @param {RadioDeleteArgs} args - Arguments to delete one Radio.
     * @example
     * // Delete one Radio
     * const Radio = await prisma.radio.delete({
     *   where: {
     *     // ... filter to delete one Radio
     *   }
     * })
     * 
     */
    delete<T extends RadioDeleteArgs>(args: SelectSubset<T, RadioDeleteArgs<ExtArgs>>): Prisma__RadioClient<$Result.GetResult<Prisma.$RadioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Radio.
     * @param {RadioUpdateArgs} args - Arguments to update one Radio.
     * @example
     * // Update one Radio
     * const radio = await prisma.radio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RadioUpdateArgs>(args: SelectSubset<T, RadioUpdateArgs<ExtArgs>>): Prisma__RadioClient<$Result.GetResult<Prisma.$RadioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Radios.
     * @param {RadioDeleteManyArgs} args - Arguments to filter Radios to delete.
     * @example
     * // Delete a few Radios
     * const { count } = await prisma.radio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RadioDeleteManyArgs>(args?: SelectSubset<T, RadioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Radios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Radios
     * const radio = await prisma.radio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RadioUpdateManyArgs>(args: SelectSubset<T, RadioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Radios and returns the data updated in the database.
     * @param {RadioUpdateManyAndReturnArgs} args - Arguments to update many Radios.
     * @example
     * // Update many Radios
     * const radio = await prisma.radio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Radios and only return the `id`
     * const radioWithIdOnly = await prisma.radio.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RadioUpdateManyAndReturnArgs>(args: SelectSubset<T, RadioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RadioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Radio.
     * @param {RadioUpsertArgs} args - Arguments to update or create a Radio.
     * @example
     * // Update or create a Radio
     * const radio = await prisma.radio.upsert({
     *   create: {
     *     // ... data to create a Radio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Radio we want to update
     *   }
     * })
     */
    upsert<T extends RadioUpsertArgs>(args: SelectSubset<T, RadioUpsertArgs<ExtArgs>>): Prisma__RadioClient<$Result.GetResult<Prisma.$RadioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Radios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadioCountArgs} args - Arguments to filter Radios to count.
     * @example
     * // Count the number of Radios
     * const count = await prisma.radio.count({
     *   where: {
     *     // ... the filter for the Radios we want to count
     *   }
     * })
    **/
    count<T extends RadioCountArgs>(
      args?: Subset<T, RadioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RadioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Radio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RadioAggregateArgs>(args: Subset<T, RadioAggregateArgs>): Prisma.PrismaPromise<GetRadioAggregateType<T>>

    /**
     * Group by Radio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RadioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RadioGroupByArgs['orderBy'] }
        : { orderBy?: RadioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RadioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRadioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Radio model
   */
  readonly fields: RadioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Radio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RadioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    partesTrabajo<T extends Radio$partesTrabajoArgs<ExtArgs> = {}>(args?: Subset<T, Radio$partesTrabajoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParteDeTrabajoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Radio model
   */
  interface RadioFieldRefs {
    readonly id: FieldRef<"Radio", 'String'>
    readonly nombre: FieldRef<"Radio", 'String'>
    readonly descripcion: FieldRef<"Radio", 'String'>
    readonly ciudad: FieldRef<"Radio", 'String'>
    readonly provincia: FieldRef<"Radio", 'String'>
    readonly createdAt: FieldRef<"Radio", 'DateTime'>
    readonly updatedAt: FieldRef<"Radio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Radio findUnique
   */
  export type RadioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radio
     */
    select?: RadioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Radio
     */
    omit?: RadioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadioInclude<ExtArgs> | null
    /**
     * Filter, which Radio to fetch.
     */
    where: RadioWhereUniqueInput
  }

  /**
   * Radio findUniqueOrThrow
   */
  export type RadioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radio
     */
    select?: RadioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Radio
     */
    omit?: RadioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadioInclude<ExtArgs> | null
    /**
     * Filter, which Radio to fetch.
     */
    where: RadioWhereUniqueInput
  }

  /**
   * Radio findFirst
   */
  export type RadioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radio
     */
    select?: RadioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Radio
     */
    omit?: RadioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadioInclude<ExtArgs> | null
    /**
     * Filter, which Radio to fetch.
     */
    where?: RadioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Radios to fetch.
     */
    orderBy?: RadioOrderByWithRelationInput | RadioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Radios.
     */
    cursor?: RadioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Radios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Radios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Radios.
     */
    distinct?: RadioScalarFieldEnum | RadioScalarFieldEnum[]
  }

  /**
   * Radio findFirstOrThrow
   */
  export type RadioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radio
     */
    select?: RadioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Radio
     */
    omit?: RadioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadioInclude<ExtArgs> | null
    /**
     * Filter, which Radio to fetch.
     */
    where?: RadioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Radios to fetch.
     */
    orderBy?: RadioOrderByWithRelationInput | RadioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Radios.
     */
    cursor?: RadioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Radios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Radios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Radios.
     */
    distinct?: RadioScalarFieldEnum | RadioScalarFieldEnum[]
  }

  /**
   * Radio findMany
   */
  export type RadioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radio
     */
    select?: RadioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Radio
     */
    omit?: RadioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadioInclude<ExtArgs> | null
    /**
     * Filter, which Radios to fetch.
     */
    where?: RadioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Radios to fetch.
     */
    orderBy?: RadioOrderByWithRelationInput | RadioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Radios.
     */
    cursor?: RadioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Radios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Radios.
     */
    skip?: number
    distinct?: RadioScalarFieldEnum | RadioScalarFieldEnum[]
  }

  /**
   * Radio create
   */
  export type RadioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radio
     */
    select?: RadioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Radio
     */
    omit?: RadioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadioInclude<ExtArgs> | null
    /**
     * The data needed to create a Radio.
     */
    data: XOR<RadioCreateInput, RadioUncheckedCreateInput>
  }

  /**
   * Radio createMany
   */
  export type RadioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Radios.
     */
    data: RadioCreateManyInput | RadioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Radio createManyAndReturn
   */
  export type RadioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radio
     */
    select?: RadioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Radio
     */
    omit?: RadioOmit<ExtArgs> | null
    /**
     * The data used to create many Radios.
     */
    data: RadioCreateManyInput | RadioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Radio update
   */
  export type RadioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radio
     */
    select?: RadioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Radio
     */
    omit?: RadioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadioInclude<ExtArgs> | null
    /**
     * The data needed to update a Radio.
     */
    data: XOR<RadioUpdateInput, RadioUncheckedUpdateInput>
    /**
     * Choose, which Radio to update.
     */
    where: RadioWhereUniqueInput
  }

  /**
   * Radio updateMany
   */
  export type RadioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Radios.
     */
    data: XOR<RadioUpdateManyMutationInput, RadioUncheckedUpdateManyInput>
    /**
     * Filter which Radios to update
     */
    where?: RadioWhereInput
    /**
     * Limit how many Radios to update.
     */
    limit?: number
  }

  /**
   * Radio updateManyAndReturn
   */
  export type RadioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radio
     */
    select?: RadioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Radio
     */
    omit?: RadioOmit<ExtArgs> | null
    /**
     * The data used to update Radios.
     */
    data: XOR<RadioUpdateManyMutationInput, RadioUncheckedUpdateManyInput>
    /**
     * Filter which Radios to update
     */
    where?: RadioWhereInput
    /**
     * Limit how many Radios to update.
     */
    limit?: number
  }

  /**
   * Radio upsert
   */
  export type RadioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radio
     */
    select?: RadioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Radio
     */
    omit?: RadioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadioInclude<ExtArgs> | null
    /**
     * The filter to search for the Radio to update in case it exists.
     */
    where: RadioWhereUniqueInput
    /**
     * In case the Radio found by the `where` argument doesn't exist, create a new Radio with this data.
     */
    create: XOR<RadioCreateInput, RadioUncheckedCreateInput>
    /**
     * In case the Radio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RadioUpdateInput, RadioUncheckedUpdateInput>
  }

  /**
   * Radio delete
   */
  export type RadioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radio
     */
    select?: RadioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Radio
     */
    omit?: RadioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadioInclude<ExtArgs> | null
    /**
     * Filter which Radio to delete.
     */
    where: RadioWhereUniqueInput
  }

  /**
   * Radio deleteMany
   */
  export type RadioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Radios to delete
     */
    where?: RadioWhereInput
    /**
     * Limit how many Radios to delete.
     */
    limit?: number
  }

  /**
   * Radio.partesTrabajo
   */
  export type Radio$partesTrabajoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParteDeTrabajo
     */
    select?: ParteDeTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParteDeTrabajo
     */
    omit?: ParteDeTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParteDeTrabajoInclude<ExtArgs> | null
    where?: ParteDeTrabajoWhereInput
    orderBy?: ParteDeTrabajoOrderByWithRelationInput | ParteDeTrabajoOrderByWithRelationInput[]
    cursor?: ParteDeTrabajoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParteDeTrabajoScalarFieldEnum | ParteDeTrabajoScalarFieldEnum[]
  }

  /**
   * Radio without action
   */
  export type RadioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radio
     */
    select?: RadioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Radio
     */
    omit?: RadioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadioInclude<ExtArgs> | null
  }


  /**
   * Model Jornada
   */

  export type AggregateJornada = {
    _count: JornadaCountAggregateOutputType | null
    _min: JornadaMinAggregateOutputType | null
    _max: JornadaMaxAggregateOutputType | null
  }

  export type JornadaMinAggregateOutputType = {
    id: string | null
    fecha: Date | null
    horaInicio: Date | null
    horaFin: Date | null
    observaciones: string | null
    createdAt: Date | null
    updatedAt: Date | null
    conductorId: string | null
  }

  export type JornadaMaxAggregateOutputType = {
    id: string | null
    fecha: Date | null
    horaInicio: Date | null
    horaFin: Date | null
    observaciones: string | null
    createdAt: Date | null
    updatedAt: Date | null
    conductorId: string | null
  }

  export type JornadaCountAggregateOutputType = {
    id: number
    fecha: number
    horaInicio: number
    horaFin: number
    observaciones: number
    createdAt: number
    updatedAt: number
    conductorId: number
    _all: number
  }


  export type JornadaMinAggregateInputType = {
    id?: true
    fecha?: true
    horaInicio?: true
    horaFin?: true
    observaciones?: true
    createdAt?: true
    updatedAt?: true
    conductorId?: true
  }

  export type JornadaMaxAggregateInputType = {
    id?: true
    fecha?: true
    horaInicio?: true
    horaFin?: true
    observaciones?: true
    createdAt?: true
    updatedAt?: true
    conductorId?: true
  }

  export type JornadaCountAggregateInputType = {
    id?: true
    fecha?: true
    horaInicio?: true
    horaFin?: true
    observaciones?: true
    createdAt?: true
    updatedAt?: true
    conductorId?: true
    _all?: true
  }

  export type JornadaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jornada to aggregate.
     */
    where?: JornadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jornadas to fetch.
     */
    orderBy?: JornadaOrderByWithRelationInput | JornadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JornadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jornadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jornadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jornadas
    **/
    _count?: true | JornadaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JornadaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JornadaMaxAggregateInputType
  }

  export type GetJornadaAggregateType<T extends JornadaAggregateArgs> = {
        [P in keyof T & keyof AggregateJornada]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJornada[P]>
      : GetScalarType<T[P], AggregateJornada[P]>
  }




  export type JornadaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JornadaWhereInput
    orderBy?: JornadaOrderByWithAggregationInput | JornadaOrderByWithAggregationInput[]
    by: JornadaScalarFieldEnum[] | JornadaScalarFieldEnum
    having?: JornadaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JornadaCountAggregateInputType | true
    _min?: JornadaMinAggregateInputType
    _max?: JornadaMaxAggregateInputType
  }

  export type JornadaGroupByOutputType = {
    id: string
    fecha: Date
    horaInicio: Date
    horaFin: Date
    observaciones: string | null
    createdAt: Date
    updatedAt: Date
    conductorId: string
    _count: JornadaCountAggregateOutputType | null
    _min: JornadaMinAggregateOutputType | null
    _max: JornadaMaxAggregateOutputType | null
  }

  type GetJornadaGroupByPayload<T extends JornadaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JornadaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JornadaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JornadaGroupByOutputType[P]>
            : GetScalarType<T[P], JornadaGroupByOutputType[P]>
        }
      >
    >


  export type JornadaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    observaciones?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conductorId?: boolean
    conductor?: boolean | ConductorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jornada"]>

  export type JornadaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    observaciones?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conductorId?: boolean
    conductor?: boolean | ConductorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jornada"]>

  export type JornadaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    observaciones?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conductorId?: boolean
    conductor?: boolean | ConductorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jornada"]>

  export type JornadaSelectScalar = {
    id?: boolean
    fecha?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    observaciones?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conductorId?: boolean
  }

  export type JornadaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha" | "horaInicio" | "horaFin" | "observaciones" | "createdAt" | "updatedAt" | "conductorId", ExtArgs["result"]["jornada"]>
  export type JornadaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conductor?: boolean | ConductorDefaultArgs<ExtArgs>
  }
  export type JornadaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conductor?: boolean | ConductorDefaultArgs<ExtArgs>
  }
  export type JornadaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conductor?: boolean | ConductorDefaultArgs<ExtArgs>
  }

  export type $JornadaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Jornada"
    objects: {
      conductor: Prisma.$ConductorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fecha: Date
      horaInicio: Date
      horaFin: Date
      observaciones: string | null
      createdAt: Date
      updatedAt: Date
      conductorId: string
    }, ExtArgs["result"]["jornada"]>
    composites: {}
  }

  type JornadaGetPayload<S extends boolean | null | undefined | JornadaDefaultArgs> = $Result.GetResult<Prisma.$JornadaPayload, S>

  type JornadaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JornadaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JornadaCountAggregateInputType | true
    }

  export interface JornadaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jornada'], meta: { name: 'Jornada' } }
    /**
     * Find zero or one Jornada that matches the filter.
     * @param {JornadaFindUniqueArgs} args - Arguments to find a Jornada
     * @example
     * // Get one Jornada
     * const jornada = await prisma.jornada.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JornadaFindUniqueArgs>(args: SelectSubset<T, JornadaFindUniqueArgs<ExtArgs>>): Prisma__JornadaClient<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jornada that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JornadaFindUniqueOrThrowArgs} args - Arguments to find a Jornada
     * @example
     * // Get one Jornada
     * const jornada = await prisma.jornada.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JornadaFindUniqueOrThrowArgs>(args: SelectSubset<T, JornadaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JornadaClient<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jornada that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JornadaFindFirstArgs} args - Arguments to find a Jornada
     * @example
     * // Get one Jornada
     * const jornada = await prisma.jornada.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JornadaFindFirstArgs>(args?: SelectSubset<T, JornadaFindFirstArgs<ExtArgs>>): Prisma__JornadaClient<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jornada that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JornadaFindFirstOrThrowArgs} args - Arguments to find a Jornada
     * @example
     * // Get one Jornada
     * const jornada = await prisma.jornada.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JornadaFindFirstOrThrowArgs>(args?: SelectSubset<T, JornadaFindFirstOrThrowArgs<ExtArgs>>): Prisma__JornadaClient<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jornadas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JornadaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jornadas
     * const jornadas = await prisma.jornada.findMany()
     * 
     * // Get first 10 Jornadas
     * const jornadas = await prisma.jornada.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jornadaWithIdOnly = await prisma.jornada.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JornadaFindManyArgs>(args?: SelectSubset<T, JornadaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jornada.
     * @param {JornadaCreateArgs} args - Arguments to create a Jornada.
     * @example
     * // Create one Jornada
     * const Jornada = await prisma.jornada.create({
     *   data: {
     *     // ... data to create a Jornada
     *   }
     * })
     * 
     */
    create<T extends JornadaCreateArgs>(args: SelectSubset<T, JornadaCreateArgs<ExtArgs>>): Prisma__JornadaClient<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jornadas.
     * @param {JornadaCreateManyArgs} args - Arguments to create many Jornadas.
     * @example
     * // Create many Jornadas
     * const jornada = await prisma.jornada.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JornadaCreateManyArgs>(args?: SelectSubset<T, JornadaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jornadas and returns the data saved in the database.
     * @param {JornadaCreateManyAndReturnArgs} args - Arguments to create many Jornadas.
     * @example
     * // Create many Jornadas
     * const jornada = await prisma.jornada.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jornadas and only return the `id`
     * const jornadaWithIdOnly = await prisma.jornada.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JornadaCreateManyAndReturnArgs>(args?: SelectSubset<T, JornadaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Jornada.
     * @param {JornadaDeleteArgs} args - Arguments to delete one Jornada.
     * @example
     * // Delete one Jornada
     * const Jornada = await prisma.jornada.delete({
     *   where: {
     *     // ... filter to delete one Jornada
     *   }
     * })
     * 
     */
    delete<T extends JornadaDeleteArgs>(args: SelectSubset<T, JornadaDeleteArgs<ExtArgs>>): Prisma__JornadaClient<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jornada.
     * @param {JornadaUpdateArgs} args - Arguments to update one Jornada.
     * @example
     * // Update one Jornada
     * const jornada = await prisma.jornada.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JornadaUpdateArgs>(args: SelectSubset<T, JornadaUpdateArgs<ExtArgs>>): Prisma__JornadaClient<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jornadas.
     * @param {JornadaDeleteManyArgs} args - Arguments to filter Jornadas to delete.
     * @example
     * // Delete a few Jornadas
     * const { count } = await prisma.jornada.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JornadaDeleteManyArgs>(args?: SelectSubset<T, JornadaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jornadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JornadaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jornadas
     * const jornada = await prisma.jornada.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JornadaUpdateManyArgs>(args: SelectSubset<T, JornadaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jornadas and returns the data updated in the database.
     * @param {JornadaUpdateManyAndReturnArgs} args - Arguments to update many Jornadas.
     * @example
     * // Update many Jornadas
     * const jornada = await prisma.jornada.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jornadas and only return the `id`
     * const jornadaWithIdOnly = await prisma.jornada.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JornadaUpdateManyAndReturnArgs>(args: SelectSubset<T, JornadaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Jornada.
     * @param {JornadaUpsertArgs} args - Arguments to update or create a Jornada.
     * @example
     * // Update or create a Jornada
     * const jornada = await prisma.jornada.upsert({
     *   create: {
     *     // ... data to create a Jornada
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jornada we want to update
     *   }
     * })
     */
    upsert<T extends JornadaUpsertArgs>(args: SelectSubset<T, JornadaUpsertArgs<ExtArgs>>): Prisma__JornadaClient<$Result.GetResult<Prisma.$JornadaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jornadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JornadaCountArgs} args - Arguments to filter Jornadas to count.
     * @example
     * // Count the number of Jornadas
     * const count = await prisma.jornada.count({
     *   where: {
     *     // ... the filter for the Jornadas we want to count
     *   }
     * })
    **/
    count<T extends JornadaCountArgs>(
      args?: Subset<T, JornadaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JornadaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jornada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JornadaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JornadaAggregateArgs>(args: Subset<T, JornadaAggregateArgs>): Prisma.PrismaPromise<GetJornadaAggregateType<T>>

    /**
     * Group by Jornada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JornadaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JornadaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JornadaGroupByArgs['orderBy'] }
        : { orderBy?: JornadaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JornadaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJornadaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jornada model
   */
  readonly fields: JornadaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jornada.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JornadaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conductor<T extends ConductorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConductorDefaultArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Jornada model
   */
  interface JornadaFieldRefs {
    readonly id: FieldRef<"Jornada", 'String'>
    readonly fecha: FieldRef<"Jornada", 'DateTime'>
    readonly horaInicio: FieldRef<"Jornada", 'DateTime'>
    readonly horaFin: FieldRef<"Jornada", 'DateTime'>
    readonly observaciones: FieldRef<"Jornada", 'String'>
    readonly createdAt: FieldRef<"Jornada", 'DateTime'>
    readonly updatedAt: FieldRef<"Jornada", 'DateTime'>
    readonly conductorId: FieldRef<"Jornada", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Jornada findUnique
   */
  export type JornadaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JornadaInclude<ExtArgs> | null
    /**
     * Filter, which Jornada to fetch.
     */
    where: JornadaWhereUniqueInput
  }

  /**
   * Jornada findUniqueOrThrow
   */
  export type JornadaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JornadaInclude<ExtArgs> | null
    /**
     * Filter, which Jornada to fetch.
     */
    where: JornadaWhereUniqueInput
  }

  /**
   * Jornada findFirst
   */
  export type JornadaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JornadaInclude<ExtArgs> | null
    /**
     * Filter, which Jornada to fetch.
     */
    where?: JornadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jornadas to fetch.
     */
    orderBy?: JornadaOrderByWithRelationInput | JornadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jornadas.
     */
    cursor?: JornadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jornadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jornadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jornadas.
     */
    distinct?: JornadaScalarFieldEnum | JornadaScalarFieldEnum[]
  }

  /**
   * Jornada findFirstOrThrow
   */
  export type JornadaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JornadaInclude<ExtArgs> | null
    /**
     * Filter, which Jornada to fetch.
     */
    where?: JornadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jornadas to fetch.
     */
    orderBy?: JornadaOrderByWithRelationInput | JornadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jornadas.
     */
    cursor?: JornadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jornadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jornadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jornadas.
     */
    distinct?: JornadaScalarFieldEnum | JornadaScalarFieldEnum[]
  }

  /**
   * Jornada findMany
   */
  export type JornadaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JornadaInclude<ExtArgs> | null
    /**
     * Filter, which Jornadas to fetch.
     */
    where?: JornadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jornadas to fetch.
     */
    orderBy?: JornadaOrderByWithRelationInput | JornadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jornadas.
     */
    cursor?: JornadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jornadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jornadas.
     */
    skip?: number
    distinct?: JornadaScalarFieldEnum | JornadaScalarFieldEnum[]
  }

  /**
   * Jornada create
   */
  export type JornadaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JornadaInclude<ExtArgs> | null
    /**
     * The data needed to create a Jornada.
     */
    data: XOR<JornadaCreateInput, JornadaUncheckedCreateInput>
  }

  /**
   * Jornada createMany
   */
  export type JornadaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jornadas.
     */
    data: JornadaCreateManyInput | JornadaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jornada createManyAndReturn
   */
  export type JornadaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * The data used to create many Jornadas.
     */
    data: JornadaCreateManyInput | JornadaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JornadaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Jornada update
   */
  export type JornadaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JornadaInclude<ExtArgs> | null
    /**
     * The data needed to update a Jornada.
     */
    data: XOR<JornadaUpdateInput, JornadaUncheckedUpdateInput>
    /**
     * Choose, which Jornada to update.
     */
    where: JornadaWhereUniqueInput
  }

  /**
   * Jornada updateMany
   */
  export type JornadaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jornadas.
     */
    data: XOR<JornadaUpdateManyMutationInput, JornadaUncheckedUpdateManyInput>
    /**
     * Filter which Jornadas to update
     */
    where?: JornadaWhereInput
    /**
     * Limit how many Jornadas to update.
     */
    limit?: number
  }

  /**
   * Jornada updateManyAndReturn
   */
  export type JornadaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * The data used to update Jornadas.
     */
    data: XOR<JornadaUpdateManyMutationInput, JornadaUncheckedUpdateManyInput>
    /**
     * Filter which Jornadas to update
     */
    where?: JornadaWhereInput
    /**
     * Limit how many Jornadas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JornadaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Jornada upsert
   */
  export type JornadaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JornadaInclude<ExtArgs> | null
    /**
     * The filter to search for the Jornada to update in case it exists.
     */
    where: JornadaWhereUniqueInput
    /**
     * In case the Jornada found by the `where` argument doesn't exist, create a new Jornada with this data.
     */
    create: XOR<JornadaCreateInput, JornadaUncheckedCreateInput>
    /**
     * In case the Jornada was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JornadaUpdateInput, JornadaUncheckedUpdateInput>
  }

  /**
   * Jornada delete
   */
  export type JornadaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JornadaInclude<ExtArgs> | null
    /**
     * Filter which Jornada to delete.
     */
    where: JornadaWhereUniqueInput
  }

  /**
   * Jornada deleteMany
   */
  export type JornadaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jornadas to delete
     */
    where?: JornadaWhereInput
    /**
     * Limit how many Jornadas to delete.
     */
    limit?: number
  }

  /**
   * Jornada without action
   */
  export type JornadaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornada
     */
    select?: JornadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jornada
     */
    omit?: JornadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JornadaInclude<ExtArgs> | null
  }


  /**
   * Model ParteDeTrabajo
   */

  export type AggregateParteDeTrabajo = {
    _count: ParteDeTrabajoCountAggregateOutputType | null
    _min: ParteDeTrabajoMinAggregateOutputType | null
    _max: ParteDeTrabajoMaxAggregateOutputType | null
  }

  export type ParteDeTrabajoMinAggregateOutputType = {
    id: string | null
    fecha: Date | null
    estado: $Enums.EstadoParte | null
    observaciones: string | null
    firmado: boolean | null
    numeroAlbaran: string | null
    createdAt: Date | null
    updatedAt: Date | null
    obraId: string | null
    conductorId: string | null
    vehiculoId: string | null
    radioId: string | null
  }

  export type ParteDeTrabajoMaxAggregateOutputType = {
    id: string | null
    fecha: Date | null
    estado: $Enums.EstadoParte | null
    observaciones: string | null
    firmado: boolean | null
    numeroAlbaran: string | null
    createdAt: Date | null
    updatedAt: Date | null
    obraId: string | null
    conductorId: string | null
    vehiculoId: string | null
    radioId: string | null
  }

  export type ParteDeTrabajoCountAggregateOutputType = {
    id: number
    fecha: number
    estado: number
    observaciones: number
    firmado: number
    numeroAlbaran: number
    createdAt: number
    updatedAt: number
    obraId: number
    conductorId: number
    vehiculoId: number
    radioId: number
    _all: number
  }


  export type ParteDeTrabajoMinAggregateInputType = {
    id?: true
    fecha?: true
    estado?: true
    observaciones?: true
    firmado?: true
    numeroAlbaran?: true
    createdAt?: true
    updatedAt?: true
    obraId?: true
    conductorId?: true
    vehiculoId?: true
    radioId?: true
  }

  export type ParteDeTrabajoMaxAggregateInputType = {
    id?: true
    fecha?: true
    estado?: true
    observaciones?: true
    firmado?: true
    numeroAlbaran?: true
    createdAt?: true
    updatedAt?: true
    obraId?: true
    conductorId?: true
    vehiculoId?: true
    radioId?: true
  }

  export type ParteDeTrabajoCountAggregateInputType = {
    id?: true
    fecha?: true
    estado?: true
    observaciones?: true
    firmado?: true
    numeroAlbaran?: true
    createdAt?: true
    updatedAt?: true
    obraId?: true
    conductorId?: true
    vehiculoId?: true
    radioId?: true
    _all?: true
  }

  export type ParteDeTrabajoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParteDeTrabajo to aggregate.
     */
    where?: ParteDeTrabajoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParteDeTrabajos to fetch.
     */
    orderBy?: ParteDeTrabajoOrderByWithRelationInput | ParteDeTrabajoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParteDeTrabajoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParteDeTrabajos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParteDeTrabajos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParteDeTrabajos
    **/
    _count?: true | ParteDeTrabajoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParteDeTrabajoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParteDeTrabajoMaxAggregateInputType
  }

  export type GetParteDeTrabajoAggregateType<T extends ParteDeTrabajoAggregateArgs> = {
        [P in keyof T & keyof AggregateParteDeTrabajo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParteDeTrabajo[P]>
      : GetScalarType<T[P], AggregateParteDeTrabajo[P]>
  }




  export type ParteDeTrabajoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParteDeTrabajoWhereInput
    orderBy?: ParteDeTrabajoOrderByWithAggregationInput | ParteDeTrabajoOrderByWithAggregationInput[]
    by: ParteDeTrabajoScalarFieldEnum[] | ParteDeTrabajoScalarFieldEnum
    having?: ParteDeTrabajoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParteDeTrabajoCountAggregateInputType | true
    _min?: ParteDeTrabajoMinAggregateInputType
    _max?: ParteDeTrabajoMaxAggregateInputType
  }

  export type ParteDeTrabajoGroupByOutputType = {
    id: string
    fecha: Date
    estado: $Enums.EstadoParte
    observaciones: string | null
    firmado: boolean
    numeroAlbaran: string | null
    createdAt: Date
    updatedAt: Date
    obraId: string
    conductorId: string
    vehiculoId: string
    radioId: string | null
    _count: ParteDeTrabajoCountAggregateOutputType | null
    _min: ParteDeTrabajoMinAggregateOutputType | null
    _max: ParteDeTrabajoMaxAggregateOutputType | null
  }

  type GetParteDeTrabajoGroupByPayload<T extends ParteDeTrabajoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParteDeTrabajoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParteDeTrabajoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParteDeTrabajoGroupByOutputType[P]>
            : GetScalarType<T[P], ParteDeTrabajoGroupByOutputType[P]>
        }
      >
    >


  export type ParteDeTrabajoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    estado?: boolean
    observaciones?: boolean
    firmado?: boolean
    numeroAlbaran?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    obraId?: boolean
    conductorId?: boolean
    vehiculoId?: boolean
    radioId?: boolean
    obra?: boolean | ObraDefaultArgs<ExtArgs>
    conductor?: boolean | ConductorDefaultArgs<ExtArgs>
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
    radio?: boolean | ParteDeTrabajo$radioArgs<ExtArgs>
    lineasParte?: boolean | ParteDeTrabajo$lineasParteArgs<ExtArgs>
    _count?: boolean | ParteDeTrabajoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parteDeTrabajo"]>

  export type ParteDeTrabajoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    estado?: boolean
    observaciones?: boolean
    firmado?: boolean
    numeroAlbaran?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    obraId?: boolean
    conductorId?: boolean
    vehiculoId?: boolean
    radioId?: boolean
    obra?: boolean | ObraDefaultArgs<ExtArgs>
    conductor?: boolean | ConductorDefaultArgs<ExtArgs>
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
    radio?: boolean | ParteDeTrabajo$radioArgs<ExtArgs>
  }, ExtArgs["result"]["parteDeTrabajo"]>

  export type ParteDeTrabajoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    estado?: boolean
    observaciones?: boolean
    firmado?: boolean
    numeroAlbaran?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    obraId?: boolean
    conductorId?: boolean
    vehiculoId?: boolean
    radioId?: boolean
    obra?: boolean | ObraDefaultArgs<ExtArgs>
    conductor?: boolean | ConductorDefaultArgs<ExtArgs>
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
    radio?: boolean | ParteDeTrabajo$radioArgs<ExtArgs>
  }, ExtArgs["result"]["parteDeTrabajo"]>

  export type ParteDeTrabajoSelectScalar = {
    id?: boolean
    fecha?: boolean
    estado?: boolean
    observaciones?: boolean
    firmado?: boolean
    numeroAlbaran?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    obraId?: boolean
    conductorId?: boolean
    vehiculoId?: boolean
    radioId?: boolean
  }

  export type ParteDeTrabajoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha" | "estado" | "observaciones" | "firmado" | "numeroAlbaran" | "createdAt" | "updatedAt" | "obraId" | "conductorId" | "vehiculoId" | "radioId", ExtArgs["result"]["parteDeTrabajo"]>
  export type ParteDeTrabajoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obra?: boolean | ObraDefaultArgs<ExtArgs>
    conductor?: boolean | ConductorDefaultArgs<ExtArgs>
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
    radio?: boolean | ParteDeTrabajo$radioArgs<ExtArgs>
    lineasParte?: boolean | ParteDeTrabajo$lineasParteArgs<ExtArgs>
    _count?: boolean | ParteDeTrabajoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParteDeTrabajoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obra?: boolean | ObraDefaultArgs<ExtArgs>
    conductor?: boolean | ConductorDefaultArgs<ExtArgs>
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
    radio?: boolean | ParteDeTrabajo$radioArgs<ExtArgs>
  }
  export type ParteDeTrabajoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obra?: boolean | ObraDefaultArgs<ExtArgs>
    conductor?: boolean | ConductorDefaultArgs<ExtArgs>
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
    radio?: boolean | ParteDeTrabajo$radioArgs<ExtArgs>
  }

  export type $ParteDeTrabajoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParteDeTrabajo"
    objects: {
      obra: Prisma.$ObraPayload<ExtArgs>
      conductor: Prisma.$ConductorPayload<ExtArgs>
      vehiculo: Prisma.$VehiculoPayload<ExtArgs>
      radio: Prisma.$RadioPayload<ExtArgs> | null
      lineasParte: Prisma.$LineaPartePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fecha: Date
      estado: $Enums.EstadoParte
      observaciones: string | null
      firmado: boolean
      numeroAlbaran: string | null
      createdAt: Date
      updatedAt: Date
      obraId: string
      conductorId: string
      vehiculoId: string
      radioId: string | null
    }, ExtArgs["result"]["parteDeTrabajo"]>
    composites: {}
  }

  type ParteDeTrabajoGetPayload<S extends boolean | null | undefined | ParteDeTrabajoDefaultArgs> = $Result.GetResult<Prisma.$ParteDeTrabajoPayload, S>

  type ParteDeTrabajoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParteDeTrabajoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParteDeTrabajoCountAggregateInputType | true
    }

  export interface ParteDeTrabajoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParteDeTrabajo'], meta: { name: 'ParteDeTrabajo' } }
    /**
     * Find zero or one ParteDeTrabajo that matches the filter.
     * @param {ParteDeTrabajoFindUniqueArgs} args - Arguments to find a ParteDeTrabajo
     * @example
     * // Get one ParteDeTrabajo
     * const parteDeTrabajo = await prisma.parteDeTrabajo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParteDeTrabajoFindUniqueArgs>(args: SelectSubset<T, ParteDeTrabajoFindUniqueArgs<ExtArgs>>): Prisma__ParteDeTrabajoClient<$Result.GetResult<Prisma.$ParteDeTrabajoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParteDeTrabajo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParteDeTrabajoFindUniqueOrThrowArgs} args - Arguments to find a ParteDeTrabajo
     * @example
     * // Get one ParteDeTrabajo
     * const parteDeTrabajo = await prisma.parteDeTrabajo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParteDeTrabajoFindUniqueOrThrowArgs>(args: SelectSubset<T, ParteDeTrabajoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParteDeTrabajoClient<$Result.GetResult<Prisma.$ParteDeTrabajoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParteDeTrabajo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParteDeTrabajoFindFirstArgs} args - Arguments to find a ParteDeTrabajo
     * @example
     * // Get one ParteDeTrabajo
     * const parteDeTrabajo = await prisma.parteDeTrabajo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParteDeTrabajoFindFirstArgs>(args?: SelectSubset<T, ParteDeTrabajoFindFirstArgs<ExtArgs>>): Prisma__ParteDeTrabajoClient<$Result.GetResult<Prisma.$ParteDeTrabajoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParteDeTrabajo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParteDeTrabajoFindFirstOrThrowArgs} args - Arguments to find a ParteDeTrabajo
     * @example
     * // Get one ParteDeTrabajo
     * const parteDeTrabajo = await prisma.parteDeTrabajo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParteDeTrabajoFindFirstOrThrowArgs>(args?: SelectSubset<T, ParteDeTrabajoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParteDeTrabajoClient<$Result.GetResult<Prisma.$ParteDeTrabajoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParteDeTrabajos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParteDeTrabajoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParteDeTrabajos
     * const parteDeTrabajos = await prisma.parteDeTrabajo.findMany()
     * 
     * // Get first 10 ParteDeTrabajos
     * const parteDeTrabajos = await prisma.parteDeTrabajo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parteDeTrabajoWithIdOnly = await prisma.parteDeTrabajo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParteDeTrabajoFindManyArgs>(args?: SelectSubset<T, ParteDeTrabajoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParteDeTrabajoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParteDeTrabajo.
     * @param {ParteDeTrabajoCreateArgs} args - Arguments to create a ParteDeTrabajo.
     * @example
     * // Create one ParteDeTrabajo
     * const ParteDeTrabajo = await prisma.parteDeTrabajo.create({
     *   data: {
     *     // ... data to create a ParteDeTrabajo
     *   }
     * })
     * 
     */
    create<T extends ParteDeTrabajoCreateArgs>(args: SelectSubset<T, ParteDeTrabajoCreateArgs<ExtArgs>>): Prisma__ParteDeTrabajoClient<$Result.GetResult<Prisma.$ParteDeTrabajoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParteDeTrabajos.
     * @param {ParteDeTrabajoCreateManyArgs} args - Arguments to create many ParteDeTrabajos.
     * @example
     * // Create many ParteDeTrabajos
     * const parteDeTrabajo = await prisma.parteDeTrabajo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParteDeTrabajoCreateManyArgs>(args?: SelectSubset<T, ParteDeTrabajoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParteDeTrabajos and returns the data saved in the database.
     * @param {ParteDeTrabajoCreateManyAndReturnArgs} args - Arguments to create many ParteDeTrabajos.
     * @example
     * // Create many ParteDeTrabajos
     * const parteDeTrabajo = await prisma.parteDeTrabajo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParteDeTrabajos and only return the `id`
     * const parteDeTrabajoWithIdOnly = await prisma.parteDeTrabajo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParteDeTrabajoCreateManyAndReturnArgs>(args?: SelectSubset<T, ParteDeTrabajoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParteDeTrabajoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParteDeTrabajo.
     * @param {ParteDeTrabajoDeleteArgs} args - Arguments to delete one ParteDeTrabajo.
     * @example
     * // Delete one ParteDeTrabajo
     * const ParteDeTrabajo = await prisma.parteDeTrabajo.delete({
     *   where: {
     *     // ... filter to delete one ParteDeTrabajo
     *   }
     * })
     * 
     */
    delete<T extends ParteDeTrabajoDeleteArgs>(args: SelectSubset<T, ParteDeTrabajoDeleteArgs<ExtArgs>>): Prisma__ParteDeTrabajoClient<$Result.GetResult<Prisma.$ParteDeTrabajoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParteDeTrabajo.
     * @param {ParteDeTrabajoUpdateArgs} args - Arguments to update one ParteDeTrabajo.
     * @example
     * // Update one ParteDeTrabajo
     * const parteDeTrabajo = await prisma.parteDeTrabajo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParteDeTrabajoUpdateArgs>(args: SelectSubset<T, ParteDeTrabajoUpdateArgs<ExtArgs>>): Prisma__ParteDeTrabajoClient<$Result.GetResult<Prisma.$ParteDeTrabajoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParteDeTrabajos.
     * @param {ParteDeTrabajoDeleteManyArgs} args - Arguments to filter ParteDeTrabajos to delete.
     * @example
     * // Delete a few ParteDeTrabajos
     * const { count } = await prisma.parteDeTrabajo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParteDeTrabajoDeleteManyArgs>(args?: SelectSubset<T, ParteDeTrabajoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParteDeTrabajos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParteDeTrabajoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParteDeTrabajos
     * const parteDeTrabajo = await prisma.parteDeTrabajo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParteDeTrabajoUpdateManyArgs>(args: SelectSubset<T, ParteDeTrabajoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParteDeTrabajos and returns the data updated in the database.
     * @param {ParteDeTrabajoUpdateManyAndReturnArgs} args - Arguments to update many ParteDeTrabajos.
     * @example
     * // Update many ParteDeTrabajos
     * const parteDeTrabajo = await prisma.parteDeTrabajo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParteDeTrabajos and only return the `id`
     * const parteDeTrabajoWithIdOnly = await prisma.parteDeTrabajo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParteDeTrabajoUpdateManyAndReturnArgs>(args: SelectSubset<T, ParteDeTrabajoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParteDeTrabajoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParteDeTrabajo.
     * @param {ParteDeTrabajoUpsertArgs} args - Arguments to update or create a ParteDeTrabajo.
     * @example
     * // Update or create a ParteDeTrabajo
     * const parteDeTrabajo = await prisma.parteDeTrabajo.upsert({
     *   create: {
     *     // ... data to create a ParteDeTrabajo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParteDeTrabajo we want to update
     *   }
     * })
     */
    upsert<T extends ParteDeTrabajoUpsertArgs>(args: SelectSubset<T, ParteDeTrabajoUpsertArgs<ExtArgs>>): Prisma__ParteDeTrabajoClient<$Result.GetResult<Prisma.$ParteDeTrabajoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParteDeTrabajos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParteDeTrabajoCountArgs} args - Arguments to filter ParteDeTrabajos to count.
     * @example
     * // Count the number of ParteDeTrabajos
     * const count = await prisma.parteDeTrabajo.count({
     *   where: {
     *     // ... the filter for the ParteDeTrabajos we want to count
     *   }
     * })
    **/
    count<T extends ParteDeTrabajoCountArgs>(
      args?: Subset<T, ParteDeTrabajoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParteDeTrabajoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParteDeTrabajo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParteDeTrabajoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParteDeTrabajoAggregateArgs>(args: Subset<T, ParteDeTrabajoAggregateArgs>): Prisma.PrismaPromise<GetParteDeTrabajoAggregateType<T>>

    /**
     * Group by ParteDeTrabajo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParteDeTrabajoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParteDeTrabajoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParteDeTrabajoGroupByArgs['orderBy'] }
        : { orderBy?: ParteDeTrabajoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParteDeTrabajoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParteDeTrabajoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParteDeTrabajo model
   */
  readonly fields: ParteDeTrabajoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParteDeTrabajo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParteDeTrabajoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    obra<T extends ObraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ObraDefaultArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    conductor<T extends ConductorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConductorDefaultArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehiculo<T extends VehiculoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehiculoDefaultArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    radio<T extends ParteDeTrabajo$radioArgs<ExtArgs> = {}>(args?: Subset<T, ParteDeTrabajo$radioArgs<ExtArgs>>): Prisma__RadioClient<$Result.GetResult<Prisma.$RadioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    lineasParte<T extends ParteDeTrabajo$lineasParteArgs<ExtArgs> = {}>(args?: Subset<T, ParteDeTrabajo$lineasParteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LineaPartePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ParteDeTrabajo model
   */
  interface ParteDeTrabajoFieldRefs {
    readonly id: FieldRef<"ParteDeTrabajo", 'String'>
    readonly fecha: FieldRef<"ParteDeTrabajo", 'DateTime'>
    readonly estado: FieldRef<"ParteDeTrabajo", 'EstadoParte'>
    readonly observaciones: FieldRef<"ParteDeTrabajo", 'String'>
    readonly firmado: FieldRef<"ParteDeTrabajo", 'Boolean'>
    readonly numeroAlbaran: FieldRef<"ParteDeTrabajo", 'String'>
    readonly createdAt: FieldRef<"ParteDeTrabajo", 'DateTime'>
    readonly updatedAt: FieldRef<"ParteDeTrabajo", 'DateTime'>
    readonly obraId: FieldRef<"ParteDeTrabajo", 'String'>
    readonly conductorId: FieldRef<"ParteDeTrabajo", 'String'>
    readonly vehiculoId: FieldRef<"ParteDeTrabajo", 'String'>
    readonly radioId: FieldRef<"ParteDeTrabajo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ParteDeTrabajo findUnique
   */
  export type ParteDeTrabajoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParteDeTrabajo
     */
    select?: ParteDeTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParteDeTrabajo
     */
    omit?: ParteDeTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParteDeTrabajoInclude<ExtArgs> | null
    /**
     * Filter, which ParteDeTrabajo to fetch.
     */
    where: ParteDeTrabajoWhereUniqueInput
  }

  /**
   * ParteDeTrabajo findUniqueOrThrow
   */
  export type ParteDeTrabajoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParteDeTrabajo
     */
    select?: ParteDeTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParteDeTrabajo
     */
    omit?: ParteDeTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParteDeTrabajoInclude<ExtArgs> | null
    /**
     * Filter, which ParteDeTrabajo to fetch.
     */
    where: ParteDeTrabajoWhereUniqueInput
  }

  /**
   * ParteDeTrabajo findFirst
   */
  export type ParteDeTrabajoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParteDeTrabajo
     */
    select?: ParteDeTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParteDeTrabajo
     */
    omit?: ParteDeTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParteDeTrabajoInclude<ExtArgs> | null
    /**
     * Filter, which ParteDeTrabajo to fetch.
     */
    where?: ParteDeTrabajoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParteDeTrabajos to fetch.
     */
    orderBy?: ParteDeTrabajoOrderByWithRelationInput | ParteDeTrabajoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParteDeTrabajos.
     */
    cursor?: ParteDeTrabajoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParteDeTrabajos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParteDeTrabajos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParteDeTrabajos.
     */
    distinct?: ParteDeTrabajoScalarFieldEnum | ParteDeTrabajoScalarFieldEnum[]
  }

  /**
   * ParteDeTrabajo findFirstOrThrow
   */
  export type ParteDeTrabajoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParteDeTrabajo
     */
    select?: ParteDeTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParteDeTrabajo
     */
    omit?: ParteDeTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParteDeTrabajoInclude<ExtArgs> | null
    /**
     * Filter, which ParteDeTrabajo to fetch.
     */
    where?: ParteDeTrabajoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParteDeTrabajos to fetch.
     */
    orderBy?: ParteDeTrabajoOrderByWithRelationInput | ParteDeTrabajoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParteDeTrabajos.
     */
    cursor?: ParteDeTrabajoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParteDeTrabajos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParteDeTrabajos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParteDeTrabajos.
     */
    distinct?: ParteDeTrabajoScalarFieldEnum | ParteDeTrabajoScalarFieldEnum[]
  }

  /**
   * ParteDeTrabajo findMany
   */
  export type ParteDeTrabajoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParteDeTrabajo
     */
    select?: ParteDeTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParteDeTrabajo
     */
    omit?: ParteDeTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParteDeTrabajoInclude<ExtArgs> | null
    /**
     * Filter, which ParteDeTrabajos to fetch.
     */
    where?: ParteDeTrabajoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParteDeTrabajos to fetch.
     */
    orderBy?: ParteDeTrabajoOrderByWithRelationInput | ParteDeTrabajoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParteDeTrabajos.
     */
    cursor?: ParteDeTrabajoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParteDeTrabajos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParteDeTrabajos.
     */
    skip?: number
    distinct?: ParteDeTrabajoScalarFieldEnum | ParteDeTrabajoScalarFieldEnum[]
  }

  /**
   * ParteDeTrabajo create
   */
  export type ParteDeTrabajoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParteDeTrabajo
     */
    select?: ParteDeTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParteDeTrabajo
     */
    omit?: ParteDeTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParteDeTrabajoInclude<ExtArgs> | null
    /**
     * The data needed to create a ParteDeTrabajo.
     */
    data: XOR<ParteDeTrabajoCreateInput, ParteDeTrabajoUncheckedCreateInput>
  }

  /**
   * ParteDeTrabajo createMany
   */
  export type ParteDeTrabajoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParteDeTrabajos.
     */
    data: ParteDeTrabajoCreateManyInput | ParteDeTrabajoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParteDeTrabajo createManyAndReturn
   */
  export type ParteDeTrabajoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParteDeTrabajo
     */
    select?: ParteDeTrabajoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParteDeTrabajo
     */
    omit?: ParteDeTrabajoOmit<ExtArgs> | null
    /**
     * The data used to create many ParteDeTrabajos.
     */
    data: ParteDeTrabajoCreateManyInput | ParteDeTrabajoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParteDeTrabajoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParteDeTrabajo update
   */
  export type ParteDeTrabajoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParteDeTrabajo
     */
    select?: ParteDeTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParteDeTrabajo
     */
    omit?: ParteDeTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParteDeTrabajoInclude<ExtArgs> | null
    /**
     * The data needed to update a ParteDeTrabajo.
     */
    data: XOR<ParteDeTrabajoUpdateInput, ParteDeTrabajoUncheckedUpdateInput>
    /**
     * Choose, which ParteDeTrabajo to update.
     */
    where: ParteDeTrabajoWhereUniqueInput
  }

  /**
   * ParteDeTrabajo updateMany
   */
  export type ParteDeTrabajoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParteDeTrabajos.
     */
    data: XOR<ParteDeTrabajoUpdateManyMutationInput, ParteDeTrabajoUncheckedUpdateManyInput>
    /**
     * Filter which ParteDeTrabajos to update
     */
    where?: ParteDeTrabajoWhereInput
    /**
     * Limit how many ParteDeTrabajos to update.
     */
    limit?: number
  }

  /**
   * ParteDeTrabajo updateManyAndReturn
   */
  export type ParteDeTrabajoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParteDeTrabajo
     */
    select?: ParteDeTrabajoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParteDeTrabajo
     */
    omit?: ParteDeTrabajoOmit<ExtArgs> | null
    /**
     * The data used to update ParteDeTrabajos.
     */
    data: XOR<ParteDeTrabajoUpdateManyMutationInput, ParteDeTrabajoUncheckedUpdateManyInput>
    /**
     * Filter which ParteDeTrabajos to update
     */
    where?: ParteDeTrabajoWhereInput
    /**
     * Limit how many ParteDeTrabajos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParteDeTrabajoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParteDeTrabajo upsert
   */
  export type ParteDeTrabajoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParteDeTrabajo
     */
    select?: ParteDeTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParteDeTrabajo
     */
    omit?: ParteDeTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParteDeTrabajoInclude<ExtArgs> | null
    /**
     * The filter to search for the ParteDeTrabajo to update in case it exists.
     */
    where: ParteDeTrabajoWhereUniqueInput
    /**
     * In case the ParteDeTrabajo found by the `where` argument doesn't exist, create a new ParteDeTrabajo with this data.
     */
    create: XOR<ParteDeTrabajoCreateInput, ParteDeTrabajoUncheckedCreateInput>
    /**
     * In case the ParteDeTrabajo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParteDeTrabajoUpdateInput, ParteDeTrabajoUncheckedUpdateInput>
  }

  /**
   * ParteDeTrabajo delete
   */
  export type ParteDeTrabajoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParteDeTrabajo
     */
    select?: ParteDeTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParteDeTrabajo
     */
    omit?: ParteDeTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParteDeTrabajoInclude<ExtArgs> | null
    /**
     * Filter which ParteDeTrabajo to delete.
     */
    where: ParteDeTrabajoWhereUniqueInput
  }

  /**
   * ParteDeTrabajo deleteMany
   */
  export type ParteDeTrabajoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParteDeTrabajos to delete
     */
    where?: ParteDeTrabajoWhereInput
    /**
     * Limit how many ParteDeTrabajos to delete.
     */
    limit?: number
  }

  /**
   * ParteDeTrabajo.radio
   */
  export type ParteDeTrabajo$radioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radio
     */
    select?: RadioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Radio
     */
    omit?: RadioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadioInclude<ExtArgs> | null
    where?: RadioWhereInput
  }

  /**
   * ParteDeTrabajo.lineasParte
   */
  export type ParteDeTrabajo$lineasParteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaParte
     */
    select?: LineaParteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaParte
     */
    omit?: LineaParteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaParteInclude<ExtArgs> | null
    where?: LineaParteWhereInput
    orderBy?: LineaParteOrderByWithRelationInput | LineaParteOrderByWithRelationInput[]
    cursor?: LineaParteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LineaParteScalarFieldEnum | LineaParteScalarFieldEnum[]
  }

  /**
   * ParteDeTrabajo without action
   */
  export type ParteDeTrabajoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParteDeTrabajo
     */
    select?: ParteDeTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParteDeTrabajo
     */
    omit?: ParteDeTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParteDeTrabajoInclude<ExtArgs> | null
  }


  /**
   * Model LineaParte
   */

  export type AggregateLineaParte = {
    _count: LineaParteCountAggregateOutputType | null
    _avg: LineaParteAvgAggregateOutputType | null
    _sum: LineaParteSumAggregateOutputType | null
    _min: LineaParteMinAggregateOutputType | null
    _max: LineaParteMaxAggregateOutputType | null
  }

  export type LineaParteAvgAggregateOutputType = {
    cantidad: number | null
  }

  export type LineaParteSumAggregateOutputType = {
    cantidad: number | null
  }

  export type LineaParteMinAggregateOutputType = {
    id: string | null
    horaSalida: Date | null
    horaLlegada: Date | null
    cantidad: number | null
    observaciones: string | null
    createdAt: Date | null
    updatedAt: Date | null
    parteTrabajoId: string | null
    vehiculoId: string | null
    materialId: string | null
  }

  export type LineaParteMaxAggregateOutputType = {
    id: string | null
    horaSalida: Date | null
    horaLlegada: Date | null
    cantidad: number | null
    observaciones: string | null
    createdAt: Date | null
    updatedAt: Date | null
    parteTrabajoId: string | null
    vehiculoId: string | null
    materialId: string | null
  }

  export type LineaParteCountAggregateOutputType = {
    id: number
    horaSalida: number
    horaLlegada: number
    cantidad: number
    observaciones: number
    createdAt: number
    updatedAt: number
    parteTrabajoId: number
    vehiculoId: number
    materialId: number
    _all: number
  }


  export type LineaParteAvgAggregateInputType = {
    cantidad?: true
  }

  export type LineaParteSumAggregateInputType = {
    cantidad?: true
  }

  export type LineaParteMinAggregateInputType = {
    id?: true
    horaSalida?: true
    horaLlegada?: true
    cantidad?: true
    observaciones?: true
    createdAt?: true
    updatedAt?: true
    parteTrabajoId?: true
    vehiculoId?: true
    materialId?: true
  }

  export type LineaParteMaxAggregateInputType = {
    id?: true
    horaSalida?: true
    horaLlegada?: true
    cantidad?: true
    observaciones?: true
    createdAt?: true
    updatedAt?: true
    parteTrabajoId?: true
    vehiculoId?: true
    materialId?: true
  }

  export type LineaParteCountAggregateInputType = {
    id?: true
    horaSalida?: true
    horaLlegada?: true
    cantidad?: true
    observaciones?: true
    createdAt?: true
    updatedAt?: true
    parteTrabajoId?: true
    vehiculoId?: true
    materialId?: true
    _all?: true
  }

  export type LineaParteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LineaParte to aggregate.
     */
    where?: LineaParteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineaPartes to fetch.
     */
    orderBy?: LineaParteOrderByWithRelationInput | LineaParteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LineaParteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineaPartes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineaPartes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LineaPartes
    **/
    _count?: true | LineaParteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LineaParteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LineaParteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LineaParteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LineaParteMaxAggregateInputType
  }

  export type GetLineaParteAggregateType<T extends LineaParteAggregateArgs> = {
        [P in keyof T & keyof AggregateLineaParte]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLineaParte[P]>
      : GetScalarType<T[P], AggregateLineaParte[P]>
  }




  export type LineaParteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LineaParteWhereInput
    orderBy?: LineaParteOrderByWithAggregationInput | LineaParteOrderByWithAggregationInput[]
    by: LineaParteScalarFieldEnum[] | LineaParteScalarFieldEnum
    having?: LineaParteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LineaParteCountAggregateInputType | true
    _avg?: LineaParteAvgAggregateInputType
    _sum?: LineaParteSumAggregateInputType
    _min?: LineaParteMinAggregateInputType
    _max?: LineaParteMaxAggregateInputType
  }

  export type LineaParteGroupByOutputType = {
    id: string
    horaSalida: Date
    horaLlegada: Date
    cantidad: number
    observaciones: string | null
    createdAt: Date
    updatedAt: Date
    parteTrabajoId: string
    vehiculoId: string
    materialId: string
    _count: LineaParteCountAggregateOutputType | null
    _avg: LineaParteAvgAggregateOutputType | null
    _sum: LineaParteSumAggregateOutputType | null
    _min: LineaParteMinAggregateOutputType | null
    _max: LineaParteMaxAggregateOutputType | null
  }

  type GetLineaParteGroupByPayload<T extends LineaParteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LineaParteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LineaParteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LineaParteGroupByOutputType[P]>
            : GetScalarType<T[P], LineaParteGroupByOutputType[P]>
        }
      >
    >


  export type LineaParteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    horaSalida?: boolean
    horaLlegada?: boolean
    cantidad?: boolean
    observaciones?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parteTrabajoId?: boolean
    vehiculoId?: boolean
    materialId?: boolean
    parteTrabajo?: boolean | ParteDeTrabajoDefaultArgs<ExtArgs>
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lineaParte"]>

  export type LineaParteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    horaSalida?: boolean
    horaLlegada?: boolean
    cantidad?: boolean
    observaciones?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parteTrabajoId?: boolean
    vehiculoId?: boolean
    materialId?: boolean
    parteTrabajo?: boolean | ParteDeTrabajoDefaultArgs<ExtArgs>
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lineaParte"]>

  export type LineaParteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    horaSalida?: boolean
    horaLlegada?: boolean
    cantidad?: boolean
    observaciones?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parteTrabajoId?: boolean
    vehiculoId?: boolean
    materialId?: boolean
    parteTrabajo?: boolean | ParteDeTrabajoDefaultArgs<ExtArgs>
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lineaParte"]>

  export type LineaParteSelectScalar = {
    id?: boolean
    horaSalida?: boolean
    horaLlegada?: boolean
    cantidad?: boolean
    observaciones?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parteTrabajoId?: boolean
    vehiculoId?: boolean
    materialId?: boolean
  }

  export type LineaParteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "horaSalida" | "horaLlegada" | "cantidad" | "observaciones" | "createdAt" | "updatedAt" | "parteTrabajoId" | "vehiculoId" | "materialId", ExtArgs["result"]["lineaParte"]>
  export type LineaParteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parteTrabajo?: boolean | ParteDeTrabajoDefaultArgs<ExtArgs>
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }
  export type LineaParteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parteTrabajo?: boolean | ParteDeTrabajoDefaultArgs<ExtArgs>
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }
  export type LineaParteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parteTrabajo?: boolean | ParteDeTrabajoDefaultArgs<ExtArgs>
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }

  export type $LineaPartePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LineaParte"
    objects: {
      parteTrabajo: Prisma.$ParteDeTrabajoPayload<ExtArgs>
      vehiculo: Prisma.$VehiculoPayload<ExtArgs>
      material: Prisma.$MaterialPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      horaSalida: Date
      horaLlegada: Date
      cantidad: number
      observaciones: string | null
      createdAt: Date
      updatedAt: Date
      parteTrabajoId: string
      vehiculoId: string
      materialId: string
    }, ExtArgs["result"]["lineaParte"]>
    composites: {}
  }

  type LineaParteGetPayload<S extends boolean | null | undefined | LineaParteDefaultArgs> = $Result.GetResult<Prisma.$LineaPartePayload, S>

  type LineaParteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LineaParteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LineaParteCountAggregateInputType | true
    }

  export interface LineaParteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LineaParte'], meta: { name: 'LineaParte' } }
    /**
     * Find zero or one LineaParte that matches the filter.
     * @param {LineaParteFindUniqueArgs} args - Arguments to find a LineaParte
     * @example
     * // Get one LineaParte
     * const lineaParte = await prisma.lineaParte.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LineaParteFindUniqueArgs>(args: SelectSubset<T, LineaParteFindUniqueArgs<ExtArgs>>): Prisma__LineaParteClient<$Result.GetResult<Prisma.$LineaPartePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LineaParte that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LineaParteFindUniqueOrThrowArgs} args - Arguments to find a LineaParte
     * @example
     * // Get one LineaParte
     * const lineaParte = await prisma.lineaParte.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LineaParteFindUniqueOrThrowArgs>(args: SelectSubset<T, LineaParteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LineaParteClient<$Result.GetResult<Prisma.$LineaPartePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LineaParte that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineaParteFindFirstArgs} args - Arguments to find a LineaParte
     * @example
     * // Get one LineaParte
     * const lineaParte = await prisma.lineaParte.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LineaParteFindFirstArgs>(args?: SelectSubset<T, LineaParteFindFirstArgs<ExtArgs>>): Prisma__LineaParteClient<$Result.GetResult<Prisma.$LineaPartePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LineaParte that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineaParteFindFirstOrThrowArgs} args - Arguments to find a LineaParte
     * @example
     * // Get one LineaParte
     * const lineaParte = await prisma.lineaParte.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LineaParteFindFirstOrThrowArgs>(args?: SelectSubset<T, LineaParteFindFirstOrThrowArgs<ExtArgs>>): Prisma__LineaParteClient<$Result.GetResult<Prisma.$LineaPartePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LineaPartes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineaParteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LineaPartes
     * const lineaPartes = await prisma.lineaParte.findMany()
     * 
     * // Get first 10 LineaPartes
     * const lineaPartes = await prisma.lineaParte.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lineaParteWithIdOnly = await prisma.lineaParte.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LineaParteFindManyArgs>(args?: SelectSubset<T, LineaParteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LineaPartePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LineaParte.
     * @param {LineaParteCreateArgs} args - Arguments to create a LineaParte.
     * @example
     * // Create one LineaParte
     * const LineaParte = await prisma.lineaParte.create({
     *   data: {
     *     // ... data to create a LineaParte
     *   }
     * })
     * 
     */
    create<T extends LineaParteCreateArgs>(args: SelectSubset<T, LineaParteCreateArgs<ExtArgs>>): Prisma__LineaParteClient<$Result.GetResult<Prisma.$LineaPartePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LineaPartes.
     * @param {LineaParteCreateManyArgs} args - Arguments to create many LineaPartes.
     * @example
     * // Create many LineaPartes
     * const lineaParte = await prisma.lineaParte.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LineaParteCreateManyArgs>(args?: SelectSubset<T, LineaParteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LineaPartes and returns the data saved in the database.
     * @param {LineaParteCreateManyAndReturnArgs} args - Arguments to create many LineaPartes.
     * @example
     * // Create many LineaPartes
     * const lineaParte = await prisma.lineaParte.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LineaPartes and only return the `id`
     * const lineaParteWithIdOnly = await prisma.lineaParte.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LineaParteCreateManyAndReturnArgs>(args?: SelectSubset<T, LineaParteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LineaPartePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LineaParte.
     * @param {LineaParteDeleteArgs} args - Arguments to delete one LineaParte.
     * @example
     * // Delete one LineaParte
     * const LineaParte = await prisma.lineaParte.delete({
     *   where: {
     *     // ... filter to delete one LineaParte
     *   }
     * })
     * 
     */
    delete<T extends LineaParteDeleteArgs>(args: SelectSubset<T, LineaParteDeleteArgs<ExtArgs>>): Prisma__LineaParteClient<$Result.GetResult<Prisma.$LineaPartePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LineaParte.
     * @param {LineaParteUpdateArgs} args - Arguments to update one LineaParte.
     * @example
     * // Update one LineaParte
     * const lineaParte = await prisma.lineaParte.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LineaParteUpdateArgs>(args: SelectSubset<T, LineaParteUpdateArgs<ExtArgs>>): Prisma__LineaParteClient<$Result.GetResult<Prisma.$LineaPartePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LineaPartes.
     * @param {LineaParteDeleteManyArgs} args - Arguments to filter LineaPartes to delete.
     * @example
     * // Delete a few LineaPartes
     * const { count } = await prisma.lineaParte.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LineaParteDeleteManyArgs>(args?: SelectSubset<T, LineaParteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LineaPartes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineaParteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LineaPartes
     * const lineaParte = await prisma.lineaParte.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LineaParteUpdateManyArgs>(args: SelectSubset<T, LineaParteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LineaPartes and returns the data updated in the database.
     * @param {LineaParteUpdateManyAndReturnArgs} args - Arguments to update many LineaPartes.
     * @example
     * // Update many LineaPartes
     * const lineaParte = await prisma.lineaParte.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LineaPartes and only return the `id`
     * const lineaParteWithIdOnly = await prisma.lineaParte.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LineaParteUpdateManyAndReturnArgs>(args: SelectSubset<T, LineaParteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LineaPartePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LineaParte.
     * @param {LineaParteUpsertArgs} args - Arguments to update or create a LineaParte.
     * @example
     * // Update or create a LineaParte
     * const lineaParte = await prisma.lineaParte.upsert({
     *   create: {
     *     // ... data to create a LineaParte
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LineaParte we want to update
     *   }
     * })
     */
    upsert<T extends LineaParteUpsertArgs>(args: SelectSubset<T, LineaParteUpsertArgs<ExtArgs>>): Prisma__LineaParteClient<$Result.GetResult<Prisma.$LineaPartePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LineaPartes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineaParteCountArgs} args - Arguments to filter LineaPartes to count.
     * @example
     * // Count the number of LineaPartes
     * const count = await prisma.lineaParte.count({
     *   where: {
     *     // ... the filter for the LineaPartes we want to count
     *   }
     * })
    **/
    count<T extends LineaParteCountArgs>(
      args?: Subset<T, LineaParteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LineaParteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LineaParte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineaParteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LineaParteAggregateArgs>(args: Subset<T, LineaParteAggregateArgs>): Prisma.PrismaPromise<GetLineaParteAggregateType<T>>

    /**
     * Group by LineaParte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineaParteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LineaParteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LineaParteGroupByArgs['orderBy'] }
        : { orderBy?: LineaParteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LineaParteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLineaParteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LineaParte model
   */
  readonly fields: LineaParteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LineaParte.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LineaParteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parteTrabajo<T extends ParteDeTrabajoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParteDeTrabajoDefaultArgs<ExtArgs>>): Prisma__ParteDeTrabajoClient<$Result.GetResult<Prisma.$ParteDeTrabajoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehiculo<T extends VehiculoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehiculoDefaultArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    material<T extends MaterialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaterialDefaultArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LineaParte model
   */
  interface LineaParteFieldRefs {
    readonly id: FieldRef<"LineaParte", 'String'>
    readonly horaSalida: FieldRef<"LineaParte", 'DateTime'>
    readonly horaLlegada: FieldRef<"LineaParte", 'DateTime'>
    readonly cantidad: FieldRef<"LineaParte", 'Float'>
    readonly observaciones: FieldRef<"LineaParte", 'String'>
    readonly createdAt: FieldRef<"LineaParte", 'DateTime'>
    readonly updatedAt: FieldRef<"LineaParte", 'DateTime'>
    readonly parteTrabajoId: FieldRef<"LineaParte", 'String'>
    readonly vehiculoId: FieldRef<"LineaParte", 'String'>
    readonly materialId: FieldRef<"LineaParte", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LineaParte findUnique
   */
  export type LineaParteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaParte
     */
    select?: LineaParteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaParte
     */
    omit?: LineaParteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaParteInclude<ExtArgs> | null
    /**
     * Filter, which LineaParte to fetch.
     */
    where: LineaParteWhereUniqueInput
  }

  /**
   * LineaParte findUniqueOrThrow
   */
  export type LineaParteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaParte
     */
    select?: LineaParteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaParte
     */
    omit?: LineaParteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaParteInclude<ExtArgs> | null
    /**
     * Filter, which LineaParte to fetch.
     */
    where: LineaParteWhereUniqueInput
  }

  /**
   * LineaParte findFirst
   */
  export type LineaParteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaParte
     */
    select?: LineaParteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaParte
     */
    omit?: LineaParteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaParteInclude<ExtArgs> | null
    /**
     * Filter, which LineaParte to fetch.
     */
    where?: LineaParteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineaPartes to fetch.
     */
    orderBy?: LineaParteOrderByWithRelationInput | LineaParteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LineaPartes.
     */
    cursor?: LineaParteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineaPartes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineaPartes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LineaPartes.
     */
    distinct?: LineaParteScalarFieldEnum | LineaParteScalarFieldEnum[]
  }

  /**
   * LineaParte findFirstOrThrow
   */
  export type LineaParteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaParte
     */
    select?: LineaParteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaParte
     */
    omit?: LineaParteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaParteInclude<ExtArgs> | null
    /**
     * Filter, which LineaParte to fetch.
     */
    where?: LineaParteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineaPartes to fetch.
     */
    orderBy?: LineaParteOrderByWithRelationInput | LineaParteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LineaPartes.
     */
    cursor?: LineaParteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineaPartes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineaPartes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LineaPartes.
     */
    distinct?: LineaParteScalarFieldEnum | LineaParteScalarFieldEnum[]
  }

  /**
   * LineaParte findMany
   */
  export type LineaParteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaParte
     */
    select?: LineaParteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaParte
     */
    omit?: LineaParteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaParteInclude<ExtArgs> | null
    /**
     * Filter, which LineaPartes to fetch.
     */
    where?: LineaParteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineaPartes to fetch.
     */
    orderBy?: LineaParteOrderByWithRelationInput | LineaParteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LineaPartes.
     */
    cursor?: LineaParteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineaPartes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineaPartes.
     */
    skip?: number
    distinct?: LineaParteScalarFieldEnum | LineaParteScalarFieldEnum[]
  }

  /**
   * LineaParte create
   */
  export type LineaParteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaParte
     */
    select?: LineaParteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaParte
     */
    omit?: LineaParteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaParteInclude<ExtArgs> | null
    /**
     * The data needed to create a LineaParte.
     */
    data: XOR<LineaParteCreateInput, LineaParteUncheckedCreateInput>
  }

  /**
   * LineaParte createMany
   */
  export type LineaParteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LineaPartes.
     */
    data: LineaParteCreateManyInput | LineaParteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LineaParte createManyAndReturn
   */
  export type LineaParteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaParte
     */
    select?: LineaParteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LineaParte
     */
    omit?: LineaParteOmit<ExtArgs> | null
    /**
     * The data used to create many LineaPartes.
     */
    data: LineaParteCreateManyInput | LineaParteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaParteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LineaParte update
   */
  export type LineaParteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaParte
     */
    select?: LineaParteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaParte
     */
    omit?: LineaParteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaParteInclude<ExtArgs> | null
    /**
     * The data needed to update a LineaParte.
     */
    data: XOR<LineaParteUpdateInput, LineaParteUncheckedUpdateInput>
    /**
     * Choose, which LineaParte to update.
     */
    where: LineaParteWhereUniqueInput
  }

  /**
   * LineaParte updateMany
   */
  export type LineaParteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LineaPartes.
     */
    data: XOR<LineaParteUpdateManyMutationInput, LineaParteUncheckedUpdateManyInput>
    /**
     * Filter which LineaPartes to update
     */
    where?: LineaParteWhereInput
    /**
     * Limit how many LineaPartes to update.
     */
    limit?: number
  }

  /**
   * LineaParte updateManyAndReturn
   */
  export type LineaParteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaParte
     */
    select?: LineaParteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LineaParte
     */
    omit?: LineaParteOmit<ExtArgs> | null
    /**
     * The data used to update LineaPartes.
     */
    data: XOR<LineaParteUpdateManyMutationInput, LineaParteUncheckedUpdateManyInput>
    /**
     * Filter which LineaPartes to update
     */
    where?: LineaParteWhereInput
    /**
     * Limit how many LineaPartes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaParteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LineaParte upsert
   */
  export type LineaParteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaParte
     */
    select?: LineaParteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaParte
     */
    omit?: LineaParteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaParteInclude<ExtArgs> | null
    /**
     * The filter to search for the LineaParte to update in case it exists.
     */
    where: LineaParteWhereUniqueInput
    /**
     * In case the LineaParte found by the `where` argument doesn't exist, create a new LineaParte with this data.
     */
    create: XOR<LineaParteCreateInput, LineaParteUncheckedCreateInput>
    /**
     * In case the LineaParte was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LineaParteUpdateInput, LineaParteUncheckedUpdateInput>
  }

  /**
   * LineaParte delete
   */
  export type LineaParteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaParte
     */
    select?: LineaParteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaParte
     */
    omit?: LineaParteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaParteInclude<ExtArgs> | null
    /**
     * Filter which LineaParte to delete.
     */
    where: LineaParteWhereUniqueInput
  }

  /**
   * LineaParte deleteMany
   */
  export type LineaParteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LineaPartes to delete
     */
    where?: LineaParteWhereInput
    /**
     * Limit how many LineaPartes to delete.
     */
    limit?: number
  }

  /**
   * LineaParte without action
   */
  export type LineaParteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaParte
     */
    select?: LineaParteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaParte
     */
    omit?: LineaParteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaParteInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    cif: 'cif',
    direccion: 'direccion',
    codigoPostal: 'codigoPostal',
    ciudad: 'ciudad',
    provincia: 'provincia',
    telefono: 'telefono',
    email: 'email',
    contacto: 'contacto',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const ObraScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    direccion: 'direccion',
    codigoPostal: 'codigoPostal',
    ciudad: 'ciudad',
    provincia: 'provincia',
    estado: 'estado',
    fechaInicio: 'fechaInicio',
    fechaFin: 'fechaFin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    clienteId: 'clienteId'
  };

  export type ObraScalarFieldEnum = (typeof ObraScalarFieldEnum)[keyof typeof ObraScalarFieldEnum]


  export const TransportistaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    cif: 'cif',
    direccion: 'direccion',
    telefono: 'telefono',
    email: 'email',
    contacto: 'contacto',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransportistaScalarFieldEnum = (typeof TransportistaScalarFieldEnum)[keyof typeof TransportistaScalarFieldEnum]


  export const VehiculoScalarFieldEnum: {
    id: 'id',
    matricula: 'matricula',
    tipo: 'tipo',
    marca: 'marca',
    modelo: 'modelo',
    capacidad: 'capacidad',
    año: 'año',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    transportistaId: 'transportistaId'
  };

  export type VehiculoScalarFieldEnum = (typeof VehiculoScalarFieldEnum)[keyof typeof VehiculoScalarFieldEnum]


  export const ConductorScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    apellidos: 'apellidos',
    dni: 'dni',
    telefono: 'telefono',
    email: 'email',
    licencia: 'licencia',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConductorScalarFieldEnum = (typeof ConductorScalarFieldEnum)[keyof typeof ConductorScalarFieldEnum]


  export const MaterialScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    unidad: 'unidad',
    precio: 'precio',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MaterialScalarFieldEnum = (typeof MaterialScalarFieldEnum)[keyof typeof MaterialScalarFieldEnum]


  export const RadioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    ciudad: 'ciudad',
    provincia: 'provincia',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RadioScalarFieldEnum = (typeof RadioScalarFieldEnum)[keyof typeof RadioScalarFieldEnum]


  export const JornadaScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    horaInicio: 'horaInicio',
    horaFin: 'horaFin',
    observaciones: 'observaciones',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    conductorId: 'conductorId'
  };

  export type JornadaScalarFieldEnum = (typeof JornadaScalarFieldEnum)[keyof typeof JornadaScalarFieldEnum]


  export const ParteDeTrabajoScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    estado: 'estado',
    observaciones: 'observaciones',
    firmado: 'firmado',
    numeroAlbaran: 'numeroAlbaran',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    obraId: 'obraId',
    conductorId: 'conductorId',
    vehiculoId: 'vehiculoId',
    radioId: 'radioId'
  };

  export type ParteDeTrabajoScalarFieldEnum = (typeof ParteDeTrabajoScalarFieldEnum)[keyof typeof ParteDeTrabajoScalarFieldEnum]


  export const LineaParteScalarFieldEnum: {
    id: 'id',
    horaSalida: 'horaSalida',
    horaLlegada: 'horaLlegada',
    cantidad: 'cantidad',
    observaciones: 'observaciones',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    parteTrabajoId: 'parteTrabajoId',
    vehiculoId: 'vehiculoId',
    materialId: 'materialId'
  };

  export type LineaParteScalarFieldEnum = (typeof LineaParteScalarFieldEnum)[keyof typeof LineaParteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TipoVehiculo'
   */
  export type EnumTipoVehiculoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoVehiculo'>
    


  /**
   * Reference to a field of type 'TipoVehiculo[]'
   */
  export type ListEnumTipoVehiculoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoVehiculo[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'EstadoParte'
   */
  export type EnumEstadoParteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoParte'>
    


  /**
   * Reference to a field of type 'EstadoParte[]'
   */
  export type ListEnumEstadoParteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoParte[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: StringFilter<"Cliente"> | string
    nombre?: StringFilter<"Cliente"> | string
    cif?: StringFilter<"Cliente"> | string
    direccion?: StringFilter<"Cliente"> | string
    codigoPostal?: StringFilter<"Cliente"> | string
    ciudad?: StringFilter<"Cliente"> | string
    provincia?: StringFilter<"Cliente"> | string
    telefono?: StringNullableFilter<"Cliente"> | string | null
    email?: StringNullableFilter<"Cliente"> | string | null
    contacto?: StringNullableFilter<"Cliente"> | string | null
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
    obras?: ObraListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    cif?: SortOrder
    direccion?: SortOrder
    codigoPostal?: SortOrder
    ciudad?: SortOrder
    provincia?: SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    contacto?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    obras?: ObraOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cif?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nombre?: StringFilter<"Cliente"> | string
    direccion?: StringFilter<"Cliente"> | string
    codigoPostal?: StringFilter<"Cliente"> | string
    ciudad?: StringFilter<"Cliente"> | string
    provincia?: StringFilter<"Cliente"> | string
    telefono?: StringNullableFilter<"Cliente"> | string | null
    email?: StringNullableFilter<"Cliente"> | string | null
    contacto?: StringNullableFilter<"Cliente"> | string | null
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
    obras?: ObraListRelationFilter
  }, "id" | "cif">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    cif?: SortOrder
    direccion?: SortOrder
    codigoPostal?: SortOrder
    ciudad?: SortOrder
    provincia?: SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    contacto?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cliente"> | string
    nombre?: StringWithAggregatesFilter<"Cliente"> | string
    cif?: StringWithAggregatesFilter<"Cliente"> | string
    direccion?: StringWithAggregatesFilter<"Cliente"> | string
    codigoPostal?: StringWithAggregatesFilter<"Cliente"> | string
    ciudad?: StringWithAggregatesFilter<"Cliente"> | string
    provincia?: StringWithAggregatesFilter<"Cliente"> | string
    telefono?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    email?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    contacto?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
  }

  export type ObraWhereInput = {
    AND?: ObraWhereInput | ObraWhereInput[]
    OR?: ObraWhereInput[]
    NOT?: ObraWhereInput | ObraWhereInput[]
    id?: StringFilter<"Obra"> | string
    nombre?: StringFilter<"Obra"> | string
    direccion?: StringFilter<"Obra"> | string
    codigoPostal?: StringFilter<"Obra"> | string
    ciudad?: StringFilter<"Obra"> | string
    provincia?: StringFilter<"Obra"> | string
    estado?: StringFilter<"Obra"> | string
    fechaInicio?: DateTimeFilter<"Obra"> | Date | string
    fechaFin?: DateTimeNullableFilter<"Obra"> | Date | string | null
    createdAt?: DateTimeFilter<"Obra"> | Date | string
    updatedAt?: DateTimeFilter<"Obra"> | Date | string
    clienteId?: StringFilter<"Obra"> | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    partesTrabajo?: ParteDeTrabajoListRelationFilter
  }

  export type ObraOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    codigoPostal?: SortOrder
    ciudad?: SortOrder
    provincia?: SortOrder
    estado?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clienteId?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    partesTrabajo?: ParteDeTrabajoOrderByRelationAggregateInput
  }

  export type ObraWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ObraWhereInput | ObraWhereInput[]
    OR?: ObraWhereInput[]
    NOT?: ObraWhereInput | ObraWhereInput[]
    nombre?: StringFilter<"Obra"> | string
    direccion?: StringFilter<"Obra"> | string
    codigoPostal?: StringFilter<"Obra"> | string
    ciudad?: StringFilter<"Obra"> | string
    provincia?: StringFilter<"Obra"> | string
    estado?: StringFilter<"Obra"> | string
    fechaInicio?: DateTimeFilter<"Obra"> | Date | string
    fechaFin?: DateTimeNullableFilter<"Obra"> | Date | string | null
    createdAt?: DateTimeFilter<"Obra"> | Date | string
    updatedAt?: DateTimeFilter<"Obra"> | Date | string
    clienteId?: StringFilter<"Obra"> | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    partesTrabajo?: ParteDeTrabajoListRelationFilter
  }, "id">

  export type ObraOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    codigoPostal?: SortOrder
    ciudad?: SortOrder
    provincia?: SortOrder
    estado?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clienteId?: SortOrder
    _count?: ObraCountOrderByAggregateInput
    _max?: ObraMaxOrderByAggregateInput
    _min?: ObraMinOrderByAggregateInput
  }

  export type ObraScalarWhereWithAggregatesInput = {
    AND?: ObraScalarWhereWithAggregatesInput | ObraScalarWhereWithAggregatesInput[]
    OR?: ObraScalarWhereWithAggregatesInput[]
    NOT?: ObraScalarWhereWithAggregatesInput | ObraScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Obra"> | string
    nombre?: StringWithAggregatesFilter<"Obra"> | string
    direccion?: StringWithAggregatesFilter<"Obra"> | string
    codigoPostal?: StringWithAggregatesFilter<"Obra"> | string
    ciudad?: StringWithAggregatesFilter<"Obra"> | string
    provincia?: StringWithAggregatesFilter<"Obra"> | string
    estado?: StringWithAggregatesFilter<"Obra"> | string
    fechaInicio?: DateTimeWithAggregatesFilter<"Obra"> | Date | string
    fechaFin?: DateTimeNullableWithAggregatesFilter<"Obra"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Obra"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Obra"> | Date | string
    clienteId?: StringWithAggregatesFilter<"Obra"> | string
  }

  export type TransportistaWhereInput = {
    AND?: TransportistaWhereInput | TransportistaWhereInput[]
    OR?: TransportistaWhereInput[]
    NOT?: TransportistaWhereInput | TransportistaWhereInput[]
    id?: StringFilter<"Transportista"> | string
    nombre?: StringFilter<"Transportista"> | string
    cif?: StringFilter<"Transportista"> | string
    direccion?: StringNullableFilter<"Transportista"> | string | null
    telefono?: StringNullableFilter<"Transportista"> | string | null
    email?: StringNullableFilter<"Transportista"> | string | null
    contacto?: StringNullableFilter<"Transportista"> | string | null
    createdAt?: DateTimeFilter<"Transportista"> | Date | string
    updatedAt?: DateTimeFilter<"Transportista"> | Date | string
    vehiculos?: VehiculoListRelationFilter
  }

  export type TransportistaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    cif?: SortOrder
    direccion?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    contacto?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehiculos?: VehiculoOrderByRelationAggregateInput
  }

  export type TransportistaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cif?: string
    AND?: TransportistaWhereInput | TransportistaWhereInput[]
    OR?: TransportistaWhereInput[]
    NOT?: TransportistaWhereInput | TransportistaWhereInput[]
    nombre?: StringFilter<"Transportista"> | string
    direccion?: StringNullableFilter<"Transportista"> | string | null
    telefono?: StringNullableFilter<"Transportista"> | string | null
    email?: StringNullableFilter<"Transportista"> | string | null
    contacto?: StringNullableFilter<"Transportista"> | string | null
    createdAt?: DateTimeFilter<"Transportista"> | Date | string
    updatedAt?: DateTimeFilter<"Transportista"> | Date | string
    vehiculos?: VehiculoListRelationFilter
  }, "id" | "cif">

  export type TransportistaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    cif?: SortOrder
    direccion?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    contacto?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransportistaCountOrderByAggregateInput
    _max?: TransportistaMaxOrderByAggregateInput
    _min?: TransportistaMinOrderByAggregateInput
  }

  export type TransportistaScalarWhereWithAggregatesInput = {
    AND?: TransportistaScalarWhereWithAggregatesInput | TransportistaScalarWhereWithAggregatesInput[]
    OR?: TransportistaScalarWhereWithAggregatesInput[]
    NOT?: TransportistaScalarWhereWithAggregatesInput | TransportistaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transportista"> | string
    nombre?: StringWithAggregatesFilter<"Transportista"> | string
    cif?: StringWithAggregatesFilter<"Transportista"> | string
    direccion?: StringNullableWithAggregatesFilter<"Transportista"> | string | null
    telefono?: StringNullableWithAggregatesFilter<"Transportista"> | string | null
    email?: StringNullableWithAggregatesFilter<"Transportista"> | string | null
    contacto?: StringNullableWithAggregatesFilter<"Transportista"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Transportista"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transportista"> | Date | string
  }

  export type VehiculoWhereInput = {
    AND?: VehiculoWhereInput | VehiculoWhereInput[]
    OR?: VehiculoWhereInput[]
    NOT?: VehiculoWhereInput | VehiculoWhereInput[]
    id?: StringFilter<"Vehiculo"> | string
    matricula?: StringFilter<"Vehiculo"> | string
    tipo?: EnumTipoVehiculoFilter<"Vehiculo"> | $Enums.TipoVehiculo
    marca?: StringFilter<"Vehiculo"> | string
    modelo?: StringFilter<"Vehiculo"> | string
    capacidad?: FloatNullableFilter<"Vehiculo"> | number | null
    año?: IntNullableFilter<"Vehiculo"> | number | null
    createdAt?: DateTimeFilter<"Vehiculo"> | Date | string
    updatedAt?: DateTimeFilter<"Vehiculo"> | Date | string
    transportistaId?: StringNullableFilter<"Vehiculo"> | string | null
    transportista?: XOR<TransportistaNullableScalarRelationFilter, TransportistaWhereInput> | null
    partesTrabajo?: ParteDeTrabajoListRelationFilter
    lineasParte?: LineaParteListRelationFilter
  }

  export type VehiculoOrderByWithRelationInput = {
    id?: SortOrder
    matricula?: SortOrder
    tipo?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    capacidad?: SortOrderInput | SortOrder
    año?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transportistaId?: SortOrderInput | SortOrder
    transportista?: TransportistaOrderByWithRelationInput
    partesTrabajo?: ParteDeTrabajoOrderByRelationAggregateInput
    lineasParte?: LineaParteOrderByRelationAggregateInput
  }

  export type VehiculoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    matricula?: string
    AND?: VehiculoWhereInput | VehiculoWhereInput[]
    OR?: VehiculoWhereInput[]
    NOT?: VehiculoWhereInput | VehiculoWhereInput[]
    tipo?: EnumTipoVehiculoFilter<"Vehiculo"> | $Enums.TipoVehiculo
    marca?: StringFilter<"Vehiculo"> | string
    modelo?: StringFilter<"Vehiculo"> | string
    capacidad?: FloatNullableFilter<"Vehiculo"> | number | null
    año?: IntNullableFilter<"Vehiculo"> | number | null
    createdAt?: DateTimeFilter<"Vehiculo"> | Date | string
    updatedAt?: DateTimeFilter<"Vehiculo"> | Date | string
    transportistaId?: StringNullableFilter<"Vehiculo"> | string | null
    transportista?: XOR<TransportistaNullableScalarRelationFilter, TransportistaWhereInput> | null
    partesTrabajo?: ParteDeTrabajoListRelationFilter
    lineasParte?: LineaParteListRelationFilter
  }, "id" | "matricula">

  export type VehiculoOrderByWithAggregationInput = {
    id?: SortOrder
    matricula?: SortOrder
    tipo?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    capacidad?: SortOrderInput | SortOrder
    año?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transportistaId?: SortOrderInput | SortOrder
    _count?: VehiculoCountOrderByAggregateInput
    _avg?: VehiculoAvgOrderByAggregateInput
    _max?: VehiculoMaxOrderByAggregateInput
    _min?: VehiculoMinOrderByAggregateInput
    _sum?: VehiculoSumOrderByAggregateInput
  }

  export type VehiculoScalarWhereWithAggregatesInput = {
    AND?: VehiculoScalarWhereWithAggregatesInput | VehiculoScalarWhereWithAggregatesInput[]
    OR?: VehiculoScalarWhereWithAggregatesInput[]
    NOT?: VehiculoScalarWhereWithAggregatesInput | VehiculoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vehiculo"> | string
    matricula?: StringWithAggregatesFilter<"Vehiculo"> | string
    tipo?: EnumTipoVehiculoWithAggregatesFilter<"Vehiculo"> | $Enums.TipoVehiculo
    marca?: StringWithAggregatesFilter<"Vehiculo"> | string
    modelo?: StringWithAggregatesFilter<"Vehiculo"> | string
    capacidad?: FloatNullableWithAggregatesFilter<"Vehiculo"> | number | null
    año?: IntNullableWithAggregatesFilter<"Vehiculo"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Vehiculo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vehiculo"> | Date | string
    transportistaId?: StringNullableWithAggregatesFilter<"Vehiculo"> | string | null
  }

  export type ConductorWhereInput = {
    AND?: ConductorWhereInput | ConductorWhereInput[]
    OR?: ConductorWhereInput[]
    NOT?: ConductorWhereInput | ConductorWhereInput[]
    id?: StringFilter<"Conductor"> | string
    nombre?: StringFilter<"Conductor"> | string
    apellidos?: StringFilter<"Conductor"> | string
    dni?: StringFilter<"Conductor"> | string
    telefono?: StringNullableFilter<"Conductor"> | string | null
    email?: StringNullableFilter<"Conductor"> | string | null
    licencia?: StringNullableFilter<"Conductor"> | string | null
    createdAt?: DateTimeFilter<"Conductor"> | Date | string
    updatedAt?: DateTimeFilter<"Conductor"> | Date | string
    partesTrabajo?: ParteDeTrabajoListRelationFilter
    jornadas?: JornadaListRelationFilter
  }

  export type ConductorOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellidos?: SortOrder
    dni?: SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    licencia?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    partesTrabajo?: ParteDeTrabajoOrderByRelationAggregateInput
    jornadas?: JornadaOrderByRelationAggregateInput
  }

  export type ConductorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    dni?: string
    AND?: ConductorWhereInput | ConductorWhereInput[]
    OR?: ConductorWhereInput[]
    NOT?: ConductorWhereInput | ConductorWhereInput[]
    nombre?: StringFilter<"Conductor"> | string
    apellidos?: StringFilter<"Conductor"> | string
    telefono?: StringNullableFilter<"Conductor"> | string | null
    email?: StringNullableFilter<"Conductor"> | string | null
    licencia?: StringNullableFilter<"Conductor"> | string | null
    createdAt?: DateTimeFilter<"Conductor"> | Date | string
    updatedAt?: DateTimeFilter<"Conductor"> | Date | string
    partesTrabajo?: ParteDeTrabajoListRelationFilter
    jornadas?: JornadaListRelationFilter
  }, "id" | "dni">

  export type ConductorOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellidos?: SortOrder
    dni?: SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    licencia?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConductorCountOrderByAggregateInput
    _max?: ConductorMaxOrderByAggregateInput
    _min?: ConductorMinOrderByAggregateInput
  }

  export type ConductorScalarWhereWithAggregatesInput = {
    AND?: ConductorScalarWhereWithAggregatesInput | ConductorScalarWhereWithAggregatesInput[]
    OR?: ConductorScalarWhereWithAggregatesInput[]
    NOT?: ConductorScalarWhereWithAggregatesInput | ConductorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Conductor"> | string
    nombre?: StringWithAggregatesFilter<"Conductor"> | string
    apellidos?: StringWithAggregatesFilter<"Conductor"> | string
    dni?: StringWithAggregatesFilter<"Conductor"> | string
    telefono?: StringNullableWithAggregatesFilter<"Conductor"> | string | null
    email?: StringNullableWithAggregatesFilter<"Conductor"> | string | null
    licencia?: StringNullableWithAggregatesFilter<"Conductor"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Conductor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Conductor"> | Date | string
  }

  export type MaterialWhereInput = {
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    id?: StringFilter<"Material"> | string
    nombre?: StringFilter<"Material"> | string
    descripcion?: StringNullableFilter<"Material"> | string | null
    unidad?: StringFilter<"Material"> | string
    precio?: FloatNullableFilter<"Material"> | number | null
    createdAt?: DateTimeFilter<"Material"> | Date | string
    updatedAt?: DateTimeFilter<"Material"> | Date | string
    lineasParte?: LineaParteListRelationFilter
  }

  export type MaterialOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    unidad?: SortOrder
    precio?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lineasParte?: LineaParteOrderByRelationAggregateInput
  }

  export type MaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    nombre?: StringFilter<"Material"> | string
    descripcion?: StringNullableFilter<"Material"> | string | null
    unidad?: StringFilter<"Material"> | string
    precio?: FloatNullableFilter<"Material"> | number | null
    createdAt?: DateTimeFilter<"Material"> | Date | string
    updatedAt?: DateTimeFilter<"Material"> | Date | string
    lineasParte?: LineaParteListRelationFilter
  }, "id">

  export type MaterialOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    unidad?: SortOrder
    precio?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MaterialCountOrderByAggregateInput
    _avg?: MaterialAvgOrderByAggregateInput
    _max?: MaterialMaxOrderByAggregateInput
    _min?: MaterialMinOrderByAggregateInput
    _sum?: MaterialSumOrderByAggregateInput
  }

  export type MaterialScalarWhereWithAggregatesInput = {
    AND?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    OR?: MaterialScalarWhereWithAggregatesInput[]
    NOT?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Material"> | string
    nombre?: StringWithAggregatesFilter<"Material"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Material"> | string | null
    unidad?: StringWithAggregatesFilter<"Material"> | string
    precio?: FloatNullableWithAggregatesFilter<"Material"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Material"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Material"> | Date | string
  }

  export type RadioWhereInput = {
    AND?: RadioWhereInput | RadioWhereInput[]
    OR?: RadioWhereInput[]
    NOT?: RadioWhereInput | RadioWhereInput[]
    id?: StringFilter<"Radio"> | string
    nombre?: StringFilter<"Radio"> | string
    descripcion?: StringNullableFilter<"Radio"> | string | null
    ciudad?: StringFilter<"Radio"> | string
    provincia?: StringFilter<"Radio"> | string
    createdAt?: DateTimeFilter<"Radio"> | Date | string
    updatedAt?: DateTimeFilter<"Radio"> | Date | string
    partesTrabajo?: ParteDeTrabajoListRelationFilter
  }

  export type RadioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    ciudad?: SortOrder
    provincia?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    partesTrabajo?: ParteDeTrabajoOrderByRelationAggregateInput
  }

  export type RadioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RadioWhereInput | RadioWhereInput[]
    OR?: RadioWhereInput[]
    NOT?: RadioWhereInput | RadioWhereInput[]
    nombre?: StringFilter<"Radio"> | string
    descripcion?: StringNullableFilter<"Radio"> | string | null
    ciudad?: StringFilter<"Radio"> | string
    provincia?: StringFilter<"Radio"> | string
    createdAt?: DateTimeFilter<"Radio"> | Date | string
    updatedAt?: DateTimeFilter<"Radio"> | Date | string
    partesTrabajo?: ParteDeTrabajoListRelationFilter
  }, "id">

  export type RadioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    ciudad?: SortOrder
    provincia?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RadioCountOrderByAggregateInput
    _max?: RadioMaxOrderByAggregateInput
    _min?: RadioMinOrderByAggregateInput
  }

  export type RadioScalarWhereWithAggregatesInput = {
    AND?: RadioScalarWhereWithAggregatesInput | RadioScalarWhereWithAggregatesInput[]
    OR?: RadioScalarWhereWithAggregatesInput[]
    NOT?: RadioScalarWhereWithAggregatesInput | RadioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Radio"> | string
    nombre?: StringWithAggregatesFilter<"Radio"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Radio"> | string | null
    ciudad?: StringWithAggregatesFilter<"Radio"> | string
    provincia?: StringWithAggregatesFilter<"Radio"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Radio"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Radio"> | Date | string
  }

  export type JornadaWhereInput = {
    AND?: JornadaWhereInput | JornadaWhereInput[]
    OR?: JornadaWhereInput[]
    NOT?: JornadaWhereInput | JornadaWhereInput[]
    id?: StringFilter<"Jornada"> | string
    fecha?: DateTimeFilter<"Jornada"> | Date | string
    horaInicio?: DateTimeFilter<"Jornada"> | Date | string
    horaFin?: DateTimeFilter<"Jornada"> | Date | string
    observaciones?: StringNullableFilter<"Jornada"> | string | null
    createdAt?: DateTimeFilter<"Jornada"> | Date | string
    updatedAt?: DateTimeFilter<"Jornada"> | Date | string
    conductorId?: StringFilter<"Jornada"> | string
    conductor?: XOR<ConductorScalarRelationFilter, ConductorWhereInput>
  }

  export type JornadaOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    conductorId?: SortOrder
    conductor?: ConductorOrderByWithRelationInput
  }

  export type JornadaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JornadaWhereInput | JornadaWhereInput[]
    OR?: JornadaWhereInput[]
    NOT?: JornadaWhereInput | JornadaWhereInput[]
    fecha?: DateTimeFilter<"Jornada"> | Date | string
    horaInicio?: DateTimeFilter<"Jornada"> | Date | string
    horaFin?: DateTimeFilter<"Jornada"> | Date | string
    observaciones?: StringNullableFilter<"Jornada"> | string | null
    createdAt?: DateTimeFilter<"Jornada"> | Date | string
    updatedAt?: DateTimeFilter<"Jornada"> | Date | string
    conductorId?: StringFilter<"Jornada"> | string
    conductor?: XOR<ConductorScalarRelationFilter, ConductorWhereInput>
  }, "id">

  export type JornadaOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    conductorId?: SortOrder
    _count?: JornadaCountOrderByAggregateInput
    _max?: JornadaMaxOrderByAggregateInput
    _min?: JornadaMinOrderByAggregateInput
  }

  export type JornadaScalarWhereWithAggregatesInput = {
    AND?: JornadaScalarWhereWithAggregatesInput | JornadaScalarWhereWithAggregatesInput[]
    OR?: JornadaScalarWhereWithAggregatesInput[]
    NOT?: JornadaScalarWhereWithAggregatesInput | JornadaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Jornada"> | string
    fecha?: DateTimeWithAggregatesFilter<"Jornada"> | Date | string
    horaInicio?: DateTimeWithAggregatesFilter<"Jornada"> | Date | string
    horaFin?: DateTimeWithAggregatesFilter<"Jornada"> | Date | string
    observaciones?: StringNullableWithAggregatesFilter<"Jornada"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Jornada"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Jornada"> | Date | string
    conductorId?: StringWithAggregatesFilter<"Jornada"> | string
  }

  export type ParteDeTrabajoWhereInput = {
    AND?: ParteDeTrabajoWhereInput | ParteDeTrabajoWhereInput[]
    OR?: ParteDeTrabajoWhereInput[]
    NOT?: ParteDeTrabajoWhereInput | ParteDeTrabajoWhereInput[]
    id?: StringFilter<"ParteDeTrabajo"> | string
    fecha?: DateTimeFilter<"ParteDeTrabajo"> | Date | string
    estado?: EnumEstadoParteFilter<"ParteDeTrabajo"> | $Enums.EstadoParte
    observaciones?: StringNullableFilter<"ParteDeTrabajo"> | string | null
    firmado?: BoolFilter<"ParteDeTrabajo"> | boolean
    numeroAlbaran?: StringNullableFilter<"ParteDeTrabajo"> | string | null
    createdAt?: DateTimeFilter<"ParteDeTrabajo"> | Date | string
    updatedAt?: DateTimeFilter<"ParteDeTrabajo"> | Date | string
    obraId?: StringFilter<"ParteDeTrabajo"> | string
    conductorId?: StringFilter<"ParteDeTrabajo"> | string
    vehiculoId?: StringFilter<"ParteDeTrabajo"> | string
    radioId?: StringNullableFilter<"ParteDeTrabajo"> | string | null
    obra?: XOR<ObraScalarRelationFilter, ObraWhereInput>
    conductor?: XOR<ConductorScalarRelationFilter, ConductorWhereInput>
    vehiculo?: XOR<VehiculoScalarRelationFilter, VehiculoWhereInput>
    radio?: XOR<RadioNullableScalarRelationFilter, RadioWhereInput> | null
    lineasParte?: LineaParteListRelationFilter
  }

  export type ParteDeTrabajoOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    firmado?: SortOrder
    numeroAlbaran?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    obraId?: SortOrder
    conductorId?: SortOrder
    vehiculoId?: SortOrder
    radioId?: SortOrderInput | SortOrder
    obra?: ObraOrderByWithRelationInput
    conductor?: ConductorOrderByWithRelationInput
    vehiculo?: VehiculoOrderByWithRelationInput
    radio?: RadioOrderByWithRelationInput
    lineasParte?: LineaParteOrderByRelationAggregateInput
  }

  export type ParteDeTrabajoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    numeroAlbaran?: string
    AND?: ParteDeTrabajoWhereInput | ParteDeTrabajoWhereInput[]
    OR?: ParteDeTrabajoWhereInput[]
    NOT?: ParteDeTrabajoWhereInput | ParteDeTrabajoWhereInput[]
    fecha?: DateTimeFilter<"ParteDeTrabajo"> | Date | string
    estado?: EnumEstadoParteFilter<"ParteDeTrabajo"> | $Enums.EstadoParte
    observaciones?: StringNullableFilter<"ParteDeTrabajo"> | string | null
    firmado?: BoolFilter<"ParteDeTrabajo"> | boolean
    createdAt?: DateTimeFilter<"ParteDeTrabajo"> | Date | string
    updatedAt?: DateTimeFilter<"ParteDeTrabajo"> | Date | string
    obraId?: StringFilter<"ParteDeTrabajo"> | string
    conductorId?: StringFilter<"ParteDeTrabajo"> | string
    vehiculoId?: StringFilter<"ParteDeTrabajo"> | string
    radioId?: StringNullableFilter<"ParteDeTrabajo"> | string | null
    obra?: XOR<ObraScalarRelationFilter, ObraWhereInput>
    conductor?: XOR<ConductorScalarRelationFilter, ConductorWhereInput>
    vehiculo?: XOR<VehiculoScalarRelationFilter, VehiculoWhereInput>
    radio?: XOR<RadioNullableScalarRelationFilter, RadioWhereInput> | null
    lineasParte?: LineaParteListRelationFilter
  }, "id" | "numeroAlbaran">

  export type ParteDeTrabajoOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    firmado?: SortOrder
    numeroAlbaran?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    obraId?: SortOrder
    conductorId?: SortOrder
    vehiculoId?: SortOrder
    radioId?: SortOrderInput | SortOrder
    _count?: ParteDeTrabajoCountOrderByAggregateInput
    _max?: ParteDeTrabajoMaxOrderByAggregateInput
    _min?: ParteDeTrabajoMinOrderByAggregateInput
  }

  export type ParteDeTrabajoScalarWhereWithAggregatesInput = {
    AND?: ParteDeTrabajoScalarWhereWithAggregatesInput | ParteDeTrabajoScalarWhereWithAggregatesInput[]
    OR?: ParteDeTrabajoScalarWhereWithAggregatesInput[]
    NOT?: ParteDeTrabajoScalarWhereWithAggregatesInput | ParteDeTrabajoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ParteDeTrabajo"> | string
    fecha?: DateTimeWithAggregatesFilter<"ParteDeTrabajo"> | Date | string
    estado?: EnumEstadoParteWithAggregatesFilter<"ParteDeTrabajo"> | $Enums.EstadoParte
    observaciones?: StringNullableWithAggregatesFilter<"ParteDeTrabajo"> | string | null
    firmado?: BoolWithAggregatesFilter<"ParteDeTrabajo"> | boolean
    numeroAlbaran?: StringNullableWithAggregatesFilter<"ParteDeTrabajo"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ParteDeTrabajo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ParteDeTrabajo"> | Date | string
    obraId?: StringWithAggregatesFilter<"ParteDeTrabajo"> | string
    conductorId?: StringWithAggregatesFilter<"ParteDeTrabajo"> | string
    vehiculoId?: StringWithAggregatesFilter<"ParteDeTrabajo"> | string
    radioId?: StringNullableWithAggregatesFilter<"ParteDeTrabajo"> | string | null
  }

  export type LineaParteWhereInput = {
    AND?: LineaParteWhereInput | LineaParteWhereInput[]
    OR?: LineaParteWhereInput[]
    NOT?: LineaParteWhereInput | LineaParteWhereInput[]
    id?: StringFilter<"LineaParte"> | string
    horaSalida?: DateTimeFilter<"LineaParte"> | Date | string
    horaLlegada?: DateTimeFilter<"LineaParte"> | Date | string
    cantidad?: FloatFilter<"LineaParte"> | number
    observaciones?: StringNullableFilter<"LineaParte"> | string | null
    createdAt?: DateTimeFilter<"LineaParte"> | Date | string
    updatedAt?: DateTimeFilter<"LineaParte"> | Date | string
    parteTrabajoId?: StringFilter<"LineaParte"> | string
    vehiculoId?: StringFilter<"LineaParte"> | string
    materialId?: StringFilter<"LineaParte"> | string
    parteTrabajo?: XOR<ParteDeTrabajoScalarRelationFilter, ParteDeTrabajoWhereInput>
    vehiculo?: XOR<VehiculoScalarRelationFilter, VehiculoWhereInput>
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
  }

  export type LineaParteOrderByWithRelationInput = {
    id?: SortOrder
    horaSalida?: SortOrder
    horaLlegada?: SortOrder
    cantidad?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parteTrabajoId?: SortOrder
    vehiculoId?: SortOrder
    materialId?: SortOrder
    parteTrabajo?: ParteDeTrabajoOrderByWithRelationInput
    vehiculo?: VehiculoOrderByWithRelationInput
    material?: MaterialOrderByWithRelationInput
  }

  export type LineaParteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LineaParteWhereInput | LineaParteWhereInput[]
    OR?: LineaParteWhereInput[]
    NOT?: LineaParteWhereInput | LineaParteWhereInput[]
    horaSalida?: DateTimeFilter<"LineaParte"> | Date | string
    horaLlegada?: DateTimeFilter<"LineaParte"> | Date | string
    cantidad?: FloatFilter<"LineaParte"> | number
    observaciones?: StringNullableFilter<"LineaParte"> | string | null
    createdAt?: DateTimeFilter<"LineaParte"> | Date | string
    updatedAt?: DateTimeFilter<"LineaParte"> | Date | string
    parteTrabajoId?: StringFilter<"LineaParte"> | string
    vehiculoId?: StringFilter<"LineaParte"> | string
    materialId?: StringFilter<"LineaParte"> | string
    parteTrabajo?: XOR<ParteDeTrabajoScalarRelationFilter, ParteDeTrabajoWhereInput>
    vehiculo?: XOR<VehiculoScalarRelationFilter, VehiculoWhereInput>
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
  }, "id">

  export type LineaParteOrderByWithAggregationInput = {
    id?: SortOrder
    horaSalida?: SortOrder
    horaLlegada?: SortOrder
    cantidad?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parteTrabajoId?: SortOrder
    vehiculoId?: SortOrder
    materialId?: SortOrder
    _count?: LineaParteCountOrderByAggregateInput
    _avg?: LineaParteAvgOrderByAggregateInput
    _max?: LineaParteMaxOrderByAggregateInput
    _min?: LineaParteMinOrderByAggregateInput
    _sum?: LineaParteSumOrderByAggregateInput
  }

  export type LineaParteScalarWhereWithAggregatesInput = {
    AND?: LineaParteScalarWhereWithAggregatesInput | LineaParteScalarWhereWithAggregatesInput[]
    OR?: LineaParteScalarWhereWithAggregatesInput[]
    NOT?: LineaParteScalarWhereWithAggregatesInput | LineaParteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LineaParte"> | string
    horaSalida?: DateTimeWithAggregatesFilter<"LineaParte"> | Date | string
    horaLlegada?: DateTimeWithAggregatesFilter<"LineaParte"> | Date | string
    cantidad?: FloatWithAggregatesFilter<"LineaParte"> | number
    observaciones?: StringNullableWithAggregatesFilter<"LineaParte"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LineaParte"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LineaParte"> | Date | string
    parteTrabajoId?: StringWithAggregatesFilter<"LineaParte"> | string
    vehiculoId?: StringWithAggregatesFilter<"LineaParte"> | string
    materialId?: StringWithAggregatesFilter<"LineaParte"> | string
  }

  export type ClienteCreateInput = {
    id?: string
    nombre: string
    cif: string
    direccion: string
    codigoPostal: string
    ciudad: string
    provincia: string
    telefono?: string | null
    email?: string | null
    contacto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    obras?: ObraCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: string
    nombre: string
    cif: string
    direccion: string
    codigoPostal: string
    ciudad: string
    provincia: string
    telefono?: string | null
    email?: string | null
    contacto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    obras?: ObraUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    cif?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    codigoPostal?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    obras?: ObraUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    cif?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    codigoPostal?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    obras?: ObraUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: string
    nombre: string
    cif: string
    direccion: string
    codigoPostal: string
    ciudad: string
    provincia: string
    telefono?: string | null
    email?: string | null
    contacto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    cif?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    codigoPostal?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    cif?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    codigoPostal?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObraCreateInput = {
    id?: string
    nombre: string
    direccion: string
    codigoPostal: string
    ciudad: string
    provincia: string
    estado?: string
    fechaInicio: Date | string
    fechaFin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutObrasInput
    partesTrabajo?: ParteDeTrabajoCreateNestedManyWithoutObraInput
  }

  export type ObraUncheckedCreateInput = {
    id?: string
    nombre: string
    direccion: string
    codigoPostal: string
    ciudad: string
    provincia: string
    estado?: string
    fechaInicio: Date | string
    fechaFin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clienteId: string
    partesTrabajo?: ParteDeTrabajoUncheckedCreateNestedManyWithoutObraInput
  }

  export type ObraUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    codigoPostal?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutObrasNestedInput
    partesTrabajo?: ParteDeTrabajoUpdateManyWithoutObraNestedInput
  }

  export type ObraUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    codigoPostal?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: StringFieldUpdateOperationsInput | string
    partesTrabajo?: ParteDeTrabajoUncheckedUpdateManyWithoutObraNestedInput
  }

  export type ObraCreateManyInput = {
    id?: string
    nombre: string
    direccion: string
    codigoPostal: string
    ciudad: string
    provincia: string
    estado?: string
    fechaInicio: Date | string
    fechaFin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clienteId: string
  }

  export type ObraUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    codigoPostal?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObraUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    codigoPostal?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: StringFieldUpdateOperationsInput | string
  }

  export type TransportistaCreateInput = {
    id?: string
    nombre: string
    cif: string
    direccion?: string | null
    telefono?: string | null
    email?: string | null
    contacto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehiculos?: VehiculoCreateNestedManyWithoutTransportistaInput
  }

  export type TransportistaUncheckedCreateInput = {
    id?: string
    nombre: string
    cif: string
    direccion?: string | null
    telefono?: string | null
    email?: string | null
    contacto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehiculos?: VehiculoUncheckedCreateNestedManyWithoutTransportistaInput
  }

  export type TransportistaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    cif?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehiculos?: VehiculoUpdateManyWithoutTransportistaNestedInput
  }

  export type TransportistaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    cif?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehiculos?: VehiculoUncheckedUpdateManyWithoutTransportistaNestedInput
  }

  export type TransportistaCreateManyInput = {
    id?: string
    nombre: string
    cif: string
    direccion?: string | null
    telefono?: string | null
    email?: string | null
    contacto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransportistaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    cif?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransportistaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    cif?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehiculoCreateInput = {
    id?: string
    matricula: string
    tipo: $Enums.TipoVehiculo
    marca: string
    modelo: string
    capacidad?: number | null
    año?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transportista?: TransportistaCreateNestedOneWithoutVehiculosInput
    partesTrabajo?: ParteDeTrabajoCreateNestedManyWithoutVehiculoInput
    lineasParte?: LineaParteCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoUncheckedCreateInput = {
    id?: string
    matricula: string
    tipo: $Enums.TipoVehiculo
    marca: string
    modelo: string
    capacidad?: number | null
    año?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transportistaId?: string | null
    partesTrabajo?: ParteDeTrabajoUncheckedCreateNestedManyWithoutVehiculoInput
    lineasParte?: LineaParteUncheckedCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoVehiculoFieldUpdateOperationsInput | $Enums.TipoVehiculo
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    capacidad?: NullableFloatFieldUpdateOperationsInput | number | null
    año?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transportista?: TransportistaUpdateOneWithoutVehiculosNestedInput
    partesTrabajo?: ParteDeTrabajoUpdateManyWithoutVehiculoNestedInput
    lineasParte?: LineaParteUpdateManyWithoutVehiculoNestedInput
  }

  export type VehiculoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoVehiculoFieldUpdateOperationsInput | $Enums.TipoVehiculo
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    capacidad?: NullableFloatFieldUpdateOperationsInput | number | null
    año?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transportistaId?: NullableStringFieldUpdateOperationsInput | string | null
    partesTrabajo?: ParteDeTrabajoUncheckedUpdateManyWithoutVehiculoNestedInput
    lineasParte?: LineaParteUncheckedUpdateManyWithoutVehiculoNestedInput
  }

  export type VehiculoCreateManyInput = {
    id?: string
    matricula: string
    tipo: $Enums.TipoVehiculo
    marca: string
    modelo: string
    capacidad?: number | null
    año?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transportistaId?: string | null
  }

  export type VehiculoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoVehiculoFieldUpdateOperationsInput | $Enums.TipoVehiculo
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    capacidad?: NullableFloatFieldUpdateOperationsInput | number | null
    año?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehiculoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoVehiculoFieldUpdateOperationsInput | $Enums.TipoVehiculo
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    capacidad?: NullableFloatFieldUpdateOperationsInput | number | null
    año?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transportistaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConductorCreateInput = {
    id?: string
    nombre: string
    apellidos: string
    dni: string
    telefono?: string | null
    email?: string | null
    licencia?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    partesTrabajo?: ParteDeTrabajoCreateNestedManyWithoutConductorInput
    jornadas?: JornadaCreateNestedManyWithoutConductorInput
  }

  export type ConductorUncheckedCreateInput = {
    id?: string
    nombre: string
    apellidos: string
    dni: string
    telefono?: string | null
    email?: string | null
    licencia?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    partesTrabajo?: ParteDeTrabajoUncheckedCreateNestedManyWithoutConductorInput
    jornadas?: JornadaUncheckedCreateNestedManyWithoutConductorInput
  }

  export type ConductorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    licencia?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partesTrabajo?: ParteDeTrabajoUpdateManyWithoutConductorNestedInput
    jornadas?: JornadaUpdateManyWithoutConductorNestedInput
  }

  export type ConductorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    licencia?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partesTrabajo?: ParteDeTrabajoUncheckedUpdateManyWithoutConductorNestedInput
    jornadas?: JornadaUncheckedUpdateManyWithoutConductorNestedInput
  }

  export type ConductorCreateManyInput = {
    id?: string
    nombre: string
    apellidos: string
    dni: string
    telefono?: string | null
    email?: string | null
    licencia?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConductorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    licencia?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConductorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    licencia?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialCreateInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    unidad: string
    precio?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lineasParte?: LineaParteCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    unidad: string
    precio?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lineasParte?: LineaParteUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    unidad?: StringFieldUpdateOperationsInput | string
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lineasParte?: LineaParteUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    unidad?: StringFieldUpdateOperationsInput | string
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lineasParte?: LineaParteUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialCreateManyInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    unidad: string
    precio?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    unidad?: StringFieldUpdateOperationsInput | string
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    unidad?: StringFieldUpdateOperationsInput | string
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RadioCreateInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    ciudad: string
    provincia: string
    createdAt?: Date | string
    updatedAt?: Date | string
    partesTrabajo?: ParteDeTrabajoCreateNestedManyWithoutRadioInput
  }

  export type RadioUncheckedCreateInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    ciudad: string
    provincia: string
    createdAt?: Date | string
    updatedAt?: Date | string
    partesTrabajo?: ParteDeTrabajoUncheckedCreateNestedManyWithoutRadioInput
  }

  export type RadioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partesTrabajo?: ParteDeTrabajoUpdateManyWithoutRadioNestedInput
  }

  export type RadioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partesTrabajo?: ParteDeTrabajoUncheckedUpdateManyWithoutRadioNestedInput
  }

  export type RadioCreateManyInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    ciudad: string
    provincia: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RadioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RadioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JornadaCreateInput = {
    id?: string
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conductor: ConductorCreateNestedOneWithoutJornadasInput
  }

  export type JornadaUncheckedCreateInput = {
    id?: string
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conductorId: string
  }

  export type JornadaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conductor?: ConductorUpdateOneRequiredWithoutJornadasNestedInput
  }

  export type JornadaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conductorId?: StringFieldUpdateOperationsInput | string
  }

  export type JornadaCreateManyInput = {
    id?: string
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conductorId: string
  }

  export type JornadaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JornadaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conductorId?: StringFieldUpdateOperationsInput | string
  }

  export type ParteDeTrabajoCreateInput = {
    id?: string
    fecha: Date | string
    estado?: $Enums.EstadoParte
    observaciones?: string | null
    firmado?: boolean
    numeroAlbaran?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    obra: ObraCreateNestedOneWithoutPartesTrabajoInput
    conductor: ConductorCreateNestedOneWithoutPartesTrabajoInput
    vehiculo: VehiculoCreateNestedOneWithoutPartesTrabajoInput
    radio?: RadioCreateNestedOneWithoutPartesTrabajoInput
    lineasParte?: LineaParteCreateNestedManyWithoutParteTrabajoInput
  }

  export type ParteDeTrabajoUncheckedCreateInput = {
    id?: string
    fecha: Date | string
    estado?: $Enums.EstadoParte
    observaciones?: string | null
    firmado?: boolean
    numeroAlbaran?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    obraId: string
    conductorId: string
    vehiculoId: string
    radioId?: string | null
    lineasParte?: LineaParteUncheckedCreateNestedManyWithoutParteTrabajoInput
  }

  export type ParteDeTrabajoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoParteFieldUpdateOperationsInput | $Enums.EstadoParte
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    firmado?: BoolFieldUpdateOperationsInput | boolean
    numeroAlbaran?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    obra?: ObraUpdateOneRequiredWithoutPartesTrabajoNestedInput
    conductor?: ConductorUpdateOneRequiredWithoutPartesTrabajoNestedInput
    vehiculo?: VehiculoUpdateOneRequiredWithoutPartesTrabajoNestedInput
    radio?: RadioUpdateOneWithoutPartesTrabajoNestedInput
    lineasParte?: LineaParteUpdateManyWithoutParteTrabajoNestedInput
  }

  export type ParteDeTrabajoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoParteFieldUpdateOperationsInput | $Enums.EstadoParte
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    firmado?: BoolFieldUpdateOperationsInput | boolean
    numeroAlbaran?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    obraId?: StringFieldUpdateOperationsInput | string
    conductorId?: StringFieldUpdateOperationsInput | string
    vehiculoId?: StringFieldUpdateOperationsInput | string
    radioId?: NullableStringFieldUpdateOperationsInput | string | null
    lineasParte?: LineaParteUncheckedUpdateManyWithoutParteTrabajoNestedInput
  }

  export type ParteDeTrabajoCreateManyInput = {
    id?: string
    fecha: Date | string
    estado?: $Enums.EstadoParte
    observaciones?: string | null
    firmado?: boolean
    numeroAlbaran?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    obraId: string
    conductorId: string
    vehiculoId: string
    radioId?: string | null
  }

  export type ParteDeTrabajoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoParteFieldUpdateOperationsInput | $Enums.EstadoParte
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    firmado?: BoolFieldUpdateOperationsInput | boolean
    numeroAlbaran?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParteDeTrabajoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoParteFieldUpdateOperationsInput | $Enums.EstadoParte
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    firmado?: BoolFieldUpdateOperationsInput | boolean
    numeroAlbaran?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    obraId?: StringFieldUpdateOperationsInput | string
    conductorId?: StringFieldUpdateOperationsInput | string
    vehiculoId?: StringFieldUpdateOperationsInput | string
    radioId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LineaParteCreateInput = {
    id?: string
    horaSalida: Date | string
    horaLlegada: Date | string
    cantidad: number
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parteTrabajo: ParteDeTrabajoCreateNestedOneWithoutLineasParteInput
    vehiculo: VehiculoCreateNestedOneWithoutLineasParteInput
    material: MaterialCreateNestedOneWithoutLineasParteInput
  }

  export type LineaParteUncheckedCreateInput = {
    id?: string
    horaSalida: Date | string
    horaLlegada: Date | string
    cantidad: number
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parteTrabajoId: string
    vehiculoId: string
    materialId: string
  }

  export type LineaParteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    horaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    horaLlegada?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: FloatFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parteTrabajo?: ParteDeTrabajoUpdateOneRequiredWithoutLineasParteNestedInput
    vehiculo?: VehiculoUpdateOneRequiredWithoutLineasParteNestedInput
    material?: MaterialUpdateOneRequiredWithoutLineasParteNestedInput
  }

  export type LineaParteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    horaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    horaLlegada?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: FloatFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parteTrabajoId?: StringFieldUpdateOperationsInput | string
    vehiculoId?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
  }

  export type LineaParteCreateManyInput = {
    id?: string
    horaSalida: Date | string
    horaLlegada: Date | string
    cantidad: number
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parteTrabajoId: string
    vehiculoId: string
    materialId: string
  }

  export type LineaParteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    horaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    horaLlegada?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: FloatFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LineaParteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    horaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    horaLlegada?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: FloatFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parteTrabajoId?: StringFieldUpdateOperationsInput | string
    vehiculoId?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ObraListRelationFilter = {
    every?: ObraWhereInput
    some?: ObraWhereInput
    none?: ObraWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ObraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    cif?: SortOrder
    direccion?: SortOrder
    codigoPostal?: SortOrder
    ciudad?: SortOrder
    provincia?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    contacto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    cif?: SortOrder
    direccion?: SortOrder
    codigoPostal?: SortOrder
    ciudad?: SortOrder
    provincia?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    contacto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    cif?: SortOrder
    direccion?: SortOrder
    codigoPostal?: SortOrder
    ciudad?: SortOrder
    provincia?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    contacto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type ParteDeTrabajoListRelationFilter = {
    every?: ParteDeTrabajoWhereInput
    some?: ParteDeTrabajoWhereInput
    none?: ParteDeTrabajoWhereInput
  }

  export type ParteDeTrabajoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ObraCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    codigoPostal?: SortOrder
    ciudad?: SortOrder
    provincia?: SortOrder
    estado?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clienteId?: SortOrder
  }

  export type ObraMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    codigoPostal?: SortOrder
    ciudad?: SortOrder
    provincia?: SortOrder
    estado?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clienteId?: SortOrder
  }

  export type ObraMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    codigoPostal?: SortOrder
    ciudad?: SortOrder
    provincia?: SortOrder
    estado?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clienteId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VehiculoListRelationFilter = {
    every?: VehiculoWhereInput
    some?: VehiculoWhereInput
    none?: VehiculoWhereInput
  }

  export type VehiculoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransportistaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    cif?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    contacto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransportistaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    cif?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    contacto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransportistaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    cif?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    contacto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTipoVehiculoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoVehiculo | EnumTipoVehiculoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoVehiculo[] | ListEnumTipoVehiculoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoVehiculo[] | ListEnumTipoVehiculoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoVehiculoFilter<$PrismaModel> | $Enums.TipoVehiculo
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TransportistaNullableScalarRelationFilter = {
    is?: TransportistaWhereInput | null
    isNot?: TransportistaWhereInput | null
  }

  export type LineaParteListRelationFilter = {
    every?: LineaParteWhereInput
    some?: LineaParteWhereInput
    none?: LineaParteWhereInput
  }

  export type LineaParteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehiculoCountOrderByAggregateInput = {
    id?: SortOrder
    matricula?: SortOrder
    tipo?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    capacidad?: SortOrder
    año?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transportistaId?: SortOrder
  }

  export type VehiculoAvgOrderByAggregateInput = {
    capacidad?: SortOrder
    año?: SortOrder
  }

  export type VehiculoMaxOrderByAggregateInput = {
    id?: SortOrder
    matricula?: SortOrder
    tipo?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    capacidad?: SortOrder
    año?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transportistaId?: SortOrder
  }

  export type VehiculoMinOrderByAggregateInput = {
    id?: SortOrder
    matricula?: SortOrder
    tipo?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    capacidad?: SortOrder
    año?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transportistaId?: SortOrder
  }

  export type VehiculoSumOrderByAggregateInput = {
    capacidad?: SortOrder
    año?: SortOrder
  }

  export type EnumTipoVehiculoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoVehiculo | EnumTipoVehiculoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoVehiculo[] | ListEnumTipoVehiculoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoVehiculo[] | ListEnumTipoVehiculoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoVehiculoWithAggregatesFilter<$PrismaModel> | $Enums.TipoVehiculo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoVehiculoFilter<$PrismaModel>
    _max?: NestedEnumTipoVehiculoFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type JornadaListRelationFilter = {
    every?: JornadaWhereInput
    some?: JornadaWhereInput
    none?: JornadaWhereInput
  }

  export type JornadaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConductorCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellidos?: SortOrder
    dni?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    licencia?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConductorMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellidos?: SortOrder
    dni?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    licencia?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConductorMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellidos?: SortOrder
    dni?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    licencia?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterialCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    unidad?: SortOrder
    precio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterialAvgOrderByAggregateInput = {
    precio?: SortOrder
  }

  export type MaterialMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    unidad?: SortOrder
    precio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterialMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    unidad?: SortOrder
    precio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterialSumOrderByAggregateInput = {
    precio?: SortOrder
  }

  export type RadioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    ciudad?: SortOrder
    provincia?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RadioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    ciudad?: SortOrder
    provincia?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RadioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    ciudad?: SortOrder
    provincia?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConductorScalarRelationFilter = {
    is?: ConductorWhereInput
    isNot?: ConductorWhereInput
  }

  export type JornadaCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    observaciones?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    conductorId?: SortOrder
  }

  export type JornadaMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    observaciones?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    conductorId?: SortOrder
  }

  export type JornadaMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    observaciones?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    conductorId?: SortOrder
  }

  export type EnumEstadoParteFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoParte | EnumEstadoParteFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoParte[] | ListEnumEstadoParteFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoParte[] | ListEnumEstadoParteFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoParteFilter<$PrismaModel> | $Enums.EstadoParte
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ObraScalarRelationFilter = {
    is?: ObraWhereInput
    isNot?: ObraWhereInput
  }

  export type VehiculoScalarRelationFilter = {
    is?: VehiculoWhereInput
    isNot?: VehiculoWhereInput
  }

  export type RadioNullableScalarRelationFilter = {
    is?: RadioWhereInput | null
    isNot?: RadioWhereInput | null
  }

  export type ParteDeTrabajoCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
    observaciones?: SortOrder
    firmado?: SortOrder
    numeroAlbaran?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    obraId?: SortOrder
    conductorId?: SortOrder
    vehiculoId?: SortOrder
    radioId?: SortOrder
  }

  export type ParteDeTrabajoMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
    observaciones?: SortOrder
    firmado?: SortOrder
    numeroAlbaran?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    obraId?: SortOrder
    conductorId?: SortOrder
    vehiculoId?: SortOrder
    radioId?: SortOrder
  }

  export type ParteDeTrabajoMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
    observaciones?: SortOrder
    firmado?: SortOrder
    numeroAlbaran?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    obraId?: SortOrder
    conductorId?: SortOrder
    vehiculoId?: SortOrder
    radioId?: SortOrder
  }

  export type EnumEstadoParteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoParte | EnumEstadoParteFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoParte[] | ListEnumEstadoParteFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoParte[] | ListEnumEstadoParteFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoParteWithAggregatesFilter<$PrismaModel> | $Enums.EstadoParte
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoParteFilter<$PrismaModel>
    _max?: NestedEnumEstadoParteFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ParteDeTrabajoScalarRelationFilter = {
    is?: ParteDeTrabajoWhereInput
    isNot?: ParteDeTrabajoWhereInput
  }

  export type MaterialScalarRelationFilter = {
    is?: MaterialWhereInput
    isNot?: MaterialWhereInput
  }

  export type LineaParteCountOrderByAggregateInput = {
    id?: SortOrder
    horaSalida?: SortOrder
    horaLlegada?: SortOrder
    cantidad?: SortOrder
    observaciones?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parteTrabajoId?: SortOrder
    vehiculoId?: SortOrder
    materialId?: SortOrder
  }

  export type LineaParteAvgOrderByAggregateInput = {
    cantidad?: SortOrder
  }

  export type LineaParteMaxOrderByAggregateInput = {
    id?: SortOrder
    horaSalida?: SortOrder
    horaLlegada?: SortOrder
    cantidad?: SortOrder
    observaciones?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parteTrabajoId?: SortOrder
    vehiculoId?: SortOrder
    materialId?: SortOrder
  }

  export type LineaParteMinOrderByAggregateInput = {
    id?: SortOrder
    horaSalida?: SortOrder
    horaLlegada?: SortOrder
    cantidad?: SortOrder
    observaciones?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parteTrabajoId?: SortOrder
    vehiculoId?: SortOrder
    materialId?: SortOrder
  }

  export type LineaParteSumOrderByAggregateInput = {
    cantidad?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ObraCreateNestedManyWithoutClienteInput = {
    create?: XOR<ObraCreateWithoutClienteInput, ObraUncheckedCreateWithoutClienteInput> | ObraCreateWithoutClienteInput[] | ObraUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ObraCreateOrConnectWithoutClienteInput | ObraCreateOrConnectWithoutClienteInput[]
    createMany?: ObraCreateManyClienteInputEnvelope
    connect?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
  }

  export type ObraUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<ObraCreateWithoutClienteInput, ObraUncheckedCreateWithoutClienteInput> | ObraCreateWithoutClienteInput[] | ObraUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ObraCreateOrConnectWithoutClienteInput | ObraCreateOrConnectWithoutClienteInput[]
    createMany?: ObraCreateManyClienteInputEnvelope
    connect?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ObraUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ObraCreateWithoutClienteInput, ObraUncheckedCreateWithoutClienteInput> | ObraCreateWithoutClienteInput[] | ObraUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ObraCreateOrConnectWithoutClienteInput | ObraCreateOrConnectWithoutClienteInput[]
    upsert?: ObraUpsertWithWhereUniqueWithoutClienteInput | ObraUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ObraCreateManyClienteInputEnvelope
    set?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
    disconnect?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
    delete?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
    connect?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
    update?: ObraUpdateWithWhereUniqueWithoutClienteInput | ObraUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ObraUpdateManyWithWhereWithoutClienteInput | ObraUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ObraScalarWhereInput | ObraScalarWhereInput[]
  }

  export type ObraUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ObraCreateWithoutClienteInput, ObraUncheckedCreateWithoutClienteInput> | ObraCreateWithoutClienteInput[] | ObraUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ObraCreateOrConnectWithoutClienteInput | ObraCreateOrConnectWithoutClienteInput[]
    upsert?: ObraUpsertWithWhereUniqueWithoutClienteInput | ObraUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ObraCreateManyClienteInputEnvelope
    set?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
    disconnect?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
    delete?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
    connect?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
    update?: ObraUpdateWithWhereUniqueWithoutClienteInput | ObraUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ObraUpdateManyWithWhereWithoutClienteInput | ObraUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ObraScalarWhereInput | ObraScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutObrasInput = {
    create?: XOR<ClienteCreateWithoutObrasInput, ClienteUncheckedCreateWithoutObrasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutObrasInput
    connect?: ClienteWhereUniqueInput
  }

  export type ParteDeTrabajoCreateNestedManyWithoutObraInput = {
    create?: XOR<ParteDeTrabajoCreateWithoutObraInput, ParteDeTrabajoUncheckedCreateWithoutObraInput> | ParteDeTrabajoCreateWithoutObraInput[] | ParteDeTrabajoUncheckedCreateWithoutObraInput[]
    connectOrCreate?: ParteDeTrabajoCreateOrConnectWithoutObraInput | ParteDeTrabajoCreateOrConnectWithoutObraInput[]
    createMany?: ParteDeTrabajoCreateManyObraInputEnvelope
    connect?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
  }

  export type ParteDeTrabajoUncheckedCreateNestedManyWithoutObraInput = {
    create?: XOR<ParteDeTrabajoCreateWithoutObraInput, ParteDeTrabajoUncheckedCreateWithoutObraInput> | ParteDeTrabajoCreateWithoutObraInput[] | ParteDeTrabajoUncheckedCreateWithoutObraInput[]
    connectOrCreate?: ParteDeTrabajoCreateOrConnectWithoutObraInput | ParteDeTrabajoCreateOrConnectWithoutObraInput[]
    createMany?: ParteDeTrabajoCreateManyObraInputEnvelope
    connect?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ClienteUpdateOneRequiredWithoutObrasNestedInput = {
    create?: XOR<ClienteCreateWithoutObrasInput, ClienteUncheckedCreateWithoutObrasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutObrasInput
    upsert?: ClienteUpsertWithoutObrasInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutObrasInput, ClienteUpdateWithoutObrasInput>, ClienteUncheckedUpdateWithoutObrasInput>
  }

  export type ParteDeTrabajoUpdateManyWithoutObraNestedInput = {
    create?: XOR<ParteDeTrabajoCreateWithoutObraInput, ParteDeTrabajoUncheckedCreateWithoutObraInput> | ParteDeTrabajoCreateWithoutObraInput[] | ParteDeTrabajoUncheckedCreateWithoutObraInput[]
    connectOrCreate?: ParteDeTrabajoCreateOrConnectWithoutObraInput | ParteDeTrabajoCreateOrConnectWithoutObraInput[]
    upsert?: ParteDeTrabajoUpsertWithWhereUniqueWithoutObraInput | ParteDeTrabajoUpsertWithWhereUniqueWithoutObraInput[]
    createMany?: ParteDeTrabajoCreateManyObraInputEnvelope
    set?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
    disconnect?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
    delete?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
    connect?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
    update?: ParteDeTrabajoUpdateWithWhereUniqueWithoutObraInput | ParteDeTrabajoUpdateWithWhereUniqueWithoutObraInput[]
    updateMany?: ParteDeTrabajoUpdateManyWithWhereWithoutObraInput | ParteDeTrabajoUpdateManyWithWhereWithoutObraInput[]
    deleteMany?: ParteDeTrabajoScalarWhereInput | ParteDeTrabajoScalarWhereInput[]
  }

  export type ParteDeTrabajoUncheckedUpdateManyWithoutObraNestedInput = {
    create?: XOR<ParteDeTrabajoCreateWithoutObraInput, ParteDeTrabajoUncheckedCreateWithoutObraInput> | ParteDeTrabajoCreateWithoutObraInput[] | ParteDeTrabajoUncheckedCreateWithoutObraInput[]
    connectOrCreate?: ParteDeTrabajoCreateOrConnectWithoutObraInput | ParteDeTrabajoCreateOrConnectWithoutObraInput[]
    upsert?: ParteDeTrabajoUpsertWithWhereUniqueWithoutObraInput | ParteDeTrabajoUpsertWithWhereUniqueWithoutObraInput[]
    createMany?: ParteDeTrabajoCreateManyObraInputEnvelope
    set?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
    disconnect?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
    delete?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
    connect?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
    update?: ParteDeTrabajoUpdateWithWhereUniqueWithoutObraInput | ParteDeTrabajoUpdateWithWhereUniqueWithoutObraInput[]
    updateMany?: ParteDeTrabajoUpdateManyWithWhereWithoutObraInput | ParteDeTrabajoUpdateManyWithWhereWithoutObraInput[]
    deleteMany?: ParteDeTrabajoScalarWhereInput | ParteDeTrabajoScalarWhereInput[]
  }

  export type VehiculoCreateNestedManyWithoutTransportistaInput = {
    create?: XOR<VehiculoCreateWithoutTransportistaInput, VehiculoUncheckedCreateWithoutTransportistaInput> | VehiculoCreateWithoutTransportistaInput[] | VehiculoUncheckedCreateWithoutTransportistaInput[]
    connectOrCreate?: VehiculoCreateOrConnectWithoutTransportistaInput | VehiculoCreateOrConnectWithoutTransportistaInput[]
    createMany?: VehiculoCreateManyTransportistaInputEnvelope
    connect?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
  }

  export type VehiculoUncheckedCreateNestedManyWithoutTransportistaInput = {
    create?: XOR<VehiculoCreateWithoutTransportistaInput, VehiculoUncheckedCreateWithoutTransportistaInput> | VehiculoCreateWithoutTransportistaInput[] | VehiculoUncheckedCreateWithoutTransportistaInput[]
    connectOrCreate?: VehiculoCreateOrConnectWithoutTransportistaInput | VehiculoCreateOrConnectWithoutTransportistaInput[]
    createMany?: VehiculoCreateManyTransportistaInputEnvelope
    connect?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
  }

  export type VehiculoUpdateManyWithoutTransportistaNestedInput = {
    create?: XOR<VehiculoCreateWithoutTransportistaInput, VehiculoUncheckedCreateWithoutTransportistaInput> | VehiculoCreateWithoutTransportistaInput[] | VehiculoUncheckedCreateWithoutTransportistaInput[]
    connectOrCreate?: VehiculoCreateOrConnectWithoutTransportistaInput | VehiculoCreateOrConnectWithoutTransportistaInput[]
    upsert?: VehiculoUpsertWithWhereUniqueWithoutTransportistaInput | VehiculoUpsertWithWhereUniqueWithoutTransportistaInput[]
    createMany?: VehiculoCreateManyTransportistaInputEnvelope
    set?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    disconnect?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    delete?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    connect?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    update?: VehiculoUpdateWithWhereUniqueWithoutTransportistaInput | VehiculoUpdateWithWhereUniqueWithoutTransportistaInput[]
    updateMany?: VehiculoUpdateManyWithWhereWithoutTransportistaInput | VehiculoUpdateManyWithWhereWithoutTransportistaInput[]
    deleteMany?: VehiculoScalarWhereInput | VehiculoScalarWhereInput[]
  }

  export type VehiculoUncheckedUpdateManyWithoutTransportistaNestedInput = {
    create?: XOR<VehiculoCreateWithoutTransportistaInput, VehiculoUncheckedCreateWithoutTransportistaInput> | VehiculoCreateWithoutTransportistaInput[] | VehiculoUncheckedCreateWithoutTransportistaInput[]
    connectOrCreate?: VehiculoCreateOrConnectWithoutTransportistaInput | VehiculoCreateOrConnectWithoutTransportistaInput[]
    upsert?: VehiculoUpsertWithWhereUniqueWithoutTransportistaInput | VehiculoUpsertWithWhereUniqueWithoutTransportistaInput[]
    createMany?: VehiculoCreateManyTransportistaInputEnvelope
    set?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    disconnect?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    delete?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    connect?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    update?: VehiculoUpdateWithWhereUniqueWithoutTransportistaInput | VehiculoUpdateWithWhereUniqueWithoutTransportistaInput[]
    updateMany?: VehiculoUpdateManyWithWhereWithoutTransportistaInput | VehiculoUpdateManyWithWhereWithoutTransportistaInput[]
    deleteMany?: VehiculoScalarWhereInput | VehiculoScalarWhereInput[]
  }

  export type TransportistaCreateNestedOneWithoutVehiculosInput = {
    create?: XOR<TransportistaCreateWithoutVehiculosInput, TransportistaUncheckedCreateWithoutVehiculosInput>
    connectOrCreate?: TransportistaCreateOrConnectWithoutVehiculosInput
    connect?: TransportistaWhereUniqueInput
  }

  export type ParteDeTrabajoCreateNestedManyWithoutVehiculoInput = {
    create?: XOR<ParteDeTrabajoCreateWithoutVehiculoInput, ParteDeTrabajoUncheckedCreateWithoutVehiculoInput> | ParteDeTrabajoCreateWithoutVehiculoInput[] | ParteDeTrabajoUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: ParteDeTrabajoCreateOrConnectWithoutVehiculoInput | ParteDeTrabajoCreateOrConnectWithoutVehiculoInput[]
    createMany?: ParteDeTrabajoCreateManyVehiculoInputEnvelope
    connect?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
  }

  export type LineaParteCreateNestedManyWithoutVehiculoInput = {
    create?: XOR<LineaParteCreateWithoutVehiculoInput, LineaParteUncheckedCreateWithoutVehiculoInput> | LineaParteCreateWithoutVehiculoInput[] | LineaParteUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: LineaParteCreateOrConnectWithoutVehiculoInput | LineaParteCreateOrConnectWithoutVehiculoInput[]
    createMany?: LineaParteCreateManyVehiculoInputEnvelope
    connect?: LineaParteWhereUniqueInput | LineaParteWhereUniqueInput[]
  }

  export type ParteDeTrabajoUncheckedCreateNestedManyWithoutVehiculoInput = {
    create?: XOR<ParteDeTrabajoCreateWithoutVehiculoInput, ParteDeTrabajoUncheckedCreateWithoutVehiculoInput> | ParteDeTrabajoCreateWithoutVehiculoInput[] | ParteDeTrabajoUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: ParteDeTrabajoCreateOrConnectWithoutVehiculoInput | ParteDeTrabajoCreateOrConnectWithoutVehiculoInput[]
    createMany?: ParteDeTrabajoCreateManyVehiculoInputEnvelope
    connect?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
  }

  export type LineaParteUncheckedCreateNestedManyWithoutVehiculoInput = {
    create?: XOR<LineaParteCreateWithoutVehiculoInput, LineaParteUncheckedCreateWithoutVehiculoInput> | LineaParteCreateWithoutVehiculoInput[] | LineaParteUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: LineaParteCreateOrConnectWithoutVehiculoInput | LineaParteCreateOrConnectWithoutVehiculoInput[]
    createMany?: LineaParteCreateManyVehiculoInputEnvelope
    connect?: LineaParteWhereUniqueInput | LineaParteWhereUniqueInput[]
  }

  export type EnumTipoVehiculoFieldUpdateOperationsInput = {
    set?: $Enums.TipoVehiculo
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TransportistaUpdateOneWithoutVehiculosNestedInput = {
    create?: XOR<TransportistaCreateWithoutVehiculosInput, TransportistaUncheckedCreateWithoutVehiculosInput>
    connectOrCreate?: TransportistaCreateOrConnectWithoutVehiculosInput
    upsert?: TransportistaUpsertWithoutVehiculosInput
    disconnect?: TransportistaWhereInput | boolean
    delete?: TransportistaWhereInput | boolean
    connect?: TransportistaWhereUniqueInput
    update?: XOR<XOR<TransportistaUpdateToOneWithWhereWithoutVehiculosInput, TransportistaUpdateWithoutVehiculosInput>, TransportistaUncheckedUpdateWithoutVehiculosInput>
  }

  export type ParteDeTrabajoUpdateManyWithoutVehiculoNestedInput = {
    create?: XOR<ParteDeTrabajoCreateWithoutVehiculoInput, ParteDeTrabajoUncheckedCreateWithoutVehiculoInput> | ParteDeTrabajoCreateWithoutVehiculoInput[] | ParteDeTrabajoUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: ParteDeTrabajoCreateOrConnectWithoutVehiculoInput | ParteDeTrabajoCreateOrConnectWithoutVehiculoInput[]
    upsert?: ParteDeTrabajoUpsertWithWhereUniqueWithoutVehiculoInput | ParteDeTrabajoUpsertWithWhereUniqueWithoutVehiculoInput[]
    createMany?: ParteDeTrabajoCreateManyVehiculoInputEnvelope
    set?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
    disconnect?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
    delete?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
    connect?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
    update?: ParteDeTrabajoUpdateWithWhereUniqueWithoutVehiculoInput | ParteDeTrabajoUpdateWithWhereUniqueWithoutVehiculoInput[]
    updateMany?: ParteDeTrabajoUpdateManyWithWhereWithoutVehiculoInput | ParteDeTrabajoUpdateManyWithWhereWithoutVehiculoInput[]
    deleteMany?: ParteDeTrabajoScalarWhereInput | ParteDeTrabajoScalarWhereInput[]
  }

  export type LineaParteUpdateManyWithoutVehiculoNestedInput = {
    create?: XOR<LineaParteCreateWithoutVehiculoInput, LineaParteUncheckedCreateWithoutVehiculoInput> | LineaParteCreateWithoutVehiculoInput[] | LineaParteUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: LineaParteCreateOrConnectWithoutVehiculoInput | LineaParteCreateOrConnectWithoutVehiculoInput[]
    upsert?: LineaParteUpsertWithWhereUniqueWithoutVehiculoInput | LineaParteUpsertWithWhereUniqueWithoutVehiculoInput[]
    createMany?: LineaParteCreateManyVehiculoInputEnvelope
    set?: LineaParteWhereUniqueInput | LineaParteWhereUniqueInput[]
    disconnect?: LineaParteWhereUniqueInput | LineaParteWhereUniqueInput[]
    delete?: LineaParteWhereUniqueInput | LineaParteWhereUniqueInput[]
    connect?: LineaParteWhereUniqueInput | LineaParteWhereUniqueInput[]
    update?: LineaParteUpdateWithWhereUniqueWithoutVehiculoInput | LineaParteUpdateWithWhereUniqueWithoutVehiculoInput[]
    updateMany?: LineaParteUpdateManyWithWhereWithoutVehiculoInput | LineaParteUpdateManyWithWhereWithoutVehiculoInput[]
    deleteMany?: LineaParteScalarWhereInput | LineaParteScalarWhereInput[]
  }

  export type ParteDeTrabajoUncheckedUpdateManyWithoutVehiculoNestedInput = {
    create?: XOR<ParteDeTrabajoCreateWithoutVehiculoInput, ParteDeTrabajoUncheckedCreateWithoutVehiculoInput> | ParteDeTrabajoCreateWithoutVehiculoInput[] | ParteDeTrabajoUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: ParteDeTrabajoCreateOrConnectWithoutVehiculoInput | ParteDeTrabajoCreateOrConnectWithoutVehiculoInput[]
    upsert?: ParteDeTrabajoUpsertWithWhereUniqueWithoutVehiculoInput | ParteDeTrabajoUpsertWithWhereUniqueWithoutVehiculoInput[]
    createMany?: ParteDeTrabajoCreateManyVehiculoInputEnvelope
    set?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
    disconnect?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
    delete?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
    connect?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
    update?: ParteDeTrabajoUpdateWithWhereUniqueWithoutVehiculoInput | ParteDeTrabajoUpdateWithWhereUniqueWithoutVehiculoInput[]
    updateMany?: ParteDeTrabajoUpdateManyWithWhereWithoutVehiculoInput | ParteDeTrabajoUpdateManyWithWhereWithoutVehiculoInput[]
    deleteMany?: ParteDeTrabajoScalarWhereInput | ParteDeTrabajoScalarWhereInput[]
  }

  export type LineaParteUncheckedUpdateManyWithoutVehiculoNestedInput = {
    create?: XOR<LineaParteCreateWithoutVehiculoInput, LineaParteUncheckedCreateWithoutVehiculoInput> | LineaParteCreateWithoutVehiculoInput[] | LineaParteUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: LineaParteCreateOrConnectWithoutVehiculoInput | LineaParteCreateOrConnectWithoutVehiculoInput[]
    upsert?: LineaParteUpsertWithWhereUniqueWithoutVehiculoInput | LineaParteUpsertWithWhereUniqueWithoutVehiculoInput[]
    createMany?: LineaParteCreateManyVehiculoInputEnvelope
    set?: LineaParteWhereUniqueInput | LineaParteWhereUniqueInput[]
    disconnect?: LineaParteWhereUniqueInput | LineaParteWhereUniqueInput[]
    delete?: LineaParteWhereUniqueInput | LineaParteWhereUniqueInput[]
    connect?: LineaParteWhereUniqueInput | LineaParteWhereUniqueInput[]
    update?: LineaParteUpdateWithWhereUniqueWithoutVehiculoInput | LineaParteUpdateWithWhereUniqueWithoutVehiculoInput[]
    updateMany?: LineaParteUpdateManyWithWhereWithoutVehiculoInput | LineaParteUpdateManyWithWhereWithoutVehiculoInput[]
    deleteMany?: LineaParteScalarWhereInput | LineaParteScalarWhereInput[]
  }

  export type ParteDeTrabajoCreateNestedManyWithoutConductorInput = {
    create?: XOR<ParteDeTrabajoCreateWithoutConductorInput, ParteDeTrabajoUncheckedCreateWithoutConductorInput> | ParteDeTrabajoCreateWithoutConductorInput[] | ParteDeTrabajoUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: ParteDeTrabajoCreateOrConnectWithoutConductorInput | ParteDeTrabajoCreateOrConnectWithoutConductorInput[]
    createMany?: ParteDeTrabajoCreateManyConductorInputEnvelope
    connect?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
  }

  export type JornadaCreateNestedManyWithoutConductorInput = {
    create?: XOR<JornadaCreateWithoutConductorInput, JornadaUncheckedCreateWithoutConductorInput> | JornadaCreateWithoutConductorInput[] | JornadaUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: JornadaCreateOrConnectWithoutConductorInput | JornadaCreateOrConnectWithoutConductorInput[]
    createMany?: JornadaCreateManyConductorInputEnvelope
    connect?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
  }

  export type ParteDeTrabajoUncheckedCreateNestedManyWithoutConductorInput = {
    create?: XOR<ParteDeTrabajoCreateWithoutConductorInput, ParteDeTrabajoUncheckedCreateWithoutConductorInput> | ParteDeTrabajoCreateWithoutConductorInput[] | ParteDeTrabajoUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: ParteDeTrabajoCreateOrConnectWithoutConductorInput | ParteDeTrabajoCreateOrConnectWithoutConductorInput[]
    createMany?: ParteDeTrabajoCreateManyConductorInputEnvelope
    connect?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
  }

  export type JornadaUncheckedCreateNestedManyWithoutConductorInput = {
    create?: XOR<JornadaCreateWithoutConductorInput, JornadaUncheckedCreateWithoutConductorInput> | JornadaCreateWithoutConductorInput[] | JornadaUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: JornadaCreateOrConnectWithoutConductorInput | JornadaCreateOrConnectWithoutConductorInput[]
    createMany?: JornadaCreateManyConductorInputEnvelope
    connect?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
  }

  export type ParteDeTrabajoUpdateManyWithoutConductorNestedInput = {
    create?: XOR<ParteDeTrabajoCreateWithoutConductorInput, ParteDeTrabajoUncheckedCreateWithoutConductorInput> | ParteDeTrabajoCreateWithoutConductorInput[] | ParteDeTrabajoUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: ParteDeTrabajoCreateOrConnectWithoutConductorInput | ParteDeTrabajoCreateOrConnectWithoutConductorInput[]
    upsert?: ParteDeTrabajoUpsertWithWhereUniqueWithoutConductorInput | ParteDeTrabajoUpsertWithWhereUniqueWithoutConductorInput[]
    createMany?: ParteDeTrabajoCreateManyConductorInputEnvelope
    set?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
    disconnect?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
    delete?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
    connect?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
    update?: ParteDeTrabajoUpdateWithWhereUniqueWithoutConductorInput | ParteDeTrabajoUpdateWithWhereUniqueWithoutConductorInput[]
    updateMany?: ParteDeTrabajoUpdateManyWithWhereWithoutConductorInput | ParteDeTrabajoUpdateManyWithWhereWithoutConductorInput[]
    deleteMany?: ParteDeTrabajoScalarWhereInput | ParteDeTrabajoScalarWhereInput[]
  }

  export type JornadaUpdateManyWithoutConductorNestedInput = {
    create?: XOR<JornadaCreateWithoutConductorInput, JornadaUncheckedCreateWithoutConductorInput> | JornadaCreateWithoutConductorInput[] | JornadaUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: JornadaCreateOrConnectWithoutConductorInput | JornadaCreateOrConnectWithoutConductorInput[]
    upsert?: JornadaUpsertWithWhereUniqueWithoutConductorInput | JornadaUpsertWithWhereUniqueWithoutConductorInput[]
    createMany?: JornadaCreateManyConductorInputEnvelope
    set?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
    disconnect?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
    delete?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
    connect?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
    update?: JornadaUpdateWithWhereUniqueWithoutConductorInput | JornadaUpdateWithWhereUniqueWithoutConductorInput[]
    updateMany?: JornadaUpdateManyWithWhereWithoutConductorInput | JornadaUpdateManyWithWhereWithoutConductorInput[]
    deleteMany?: JornadaScalarWhereInput | JornadaScalarWhereInput[]
  }

  export type ParteDeTrabajoUncheckedUpdateManyWithoutConductorNestedInput = {
    create?: XOR<ParteDeTrabajoCreateWithoutConductorInput, ParteDeTrabajoUncheckedCreateWithoutConductorInput> | ParteDeTrabajoCreateWithoutConductorInput[] | ParteDeTrabajoUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: ParteDeTrabajoCreateOrConnectWithoutConductorInput | ParteDeTrabajoCreateOrConnectWithoutConductorInput[]
    upsert?: ParteDeTrabajoUpsertWithWhereUniqueWithoutConductorInput | ParteDeTrabajoUpsertWithWhereUniqueWithoutConductorInput[]
    createMany?: ParteDeTrabajoCreateManyConductorInputEnvelope
    set?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
    disconnect?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
    delete?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
    connect?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
    update?: ParteDeTrabajoUpdateWithWhereUniqueWithoutConductorInput | ParteDeTrabajoUpdateWithWhereUniqueWithoutConductorInput[]
    updateMany?: ParteDeTrabajoUpdateManyWithWhereWithoutConductorInput | ParteDeTrabajoUpdateManyWithWhereWithoutConductorInput[]
    deleteMany?: ParteDeTrabajoScalarWhereInput | ParteDeTrabajoScalarWhereInput[]
  }

  export type JornadaUncheckedUpdateManyWithoutConductorNestedInput = {
    create?: XOR<JornadaCreateWithoutConductorInput, JornadaUncheckedCreateWithoutConductorInput> | JornadaCreateWithoutConductorInput[] | JornadaUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: JornadaCreateOrConnectWithoutConductorInput | JornadaCreateOrConnectWithoutConductorInput[]
    upsert?: JornadaUpsertWithWhereUniqueWithoutConductorInput | JornadaUpsertWithWhereUniqueWithoutConductorInput[]
    createMany?: JornadaCreateManyConductorInputEnvelope
    set?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
    disconnect?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
    delete?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
    connect?: JornadaWhereUniqueInput | JornadaWhereUniqueInput[]
    update?: JornadaUpdateWithWhereUniqueWithoutConductorInput | JornadaUpdateWithWhereUniqueWithoutConductorInput[]
    updateMany?: JornadaUpdateManyWithWhereWithoutConductorInput | JornadaUpdateManyWithWhereWithoutConductorInput[]
    deleteMany?: JornadaScalarWhereInput | JornadaScalarWhereInput[]
  }

  export type LineaParteCreateNestedManyWithoutMaterialInput = {
    create?: XOR<LineaParteCreateWithoutMaterialInput, LineaParteUncheckedCreateWithoutMaterialInput> | LineaParteCreateWithoutMaterialInput[] | LineaParteUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: LineaParteCreateOrConnectWithoutMaterialInput | LineaParteCreateOrConnectWithoutMaterialInput[]
    createMany?: LineaParteCreateManyMaterialInputEnvelope
    connect?: LineaParteWhereUniqueInput | LineaParteWhereUniqueInput[]
  }

  export type LineaParteUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<LineaParteCreateWithoutMaterialInput, LineaParteUncheckedCreateWithoutMaterialInput> | LineaParteCreateWithoutMaterialInput[] | LineaParteUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: LineaParteCreateOrConnectWithoutMaterialInput | LineaParteCreateOrConnectWithoutMaterialInput[]
    createMany?: LineaParteCreateManyMaterialInputEnvelope
    connect?: LineaParteWhereUniqueInput | LineaParteWhereUniqueInput[]
  }

  export type LineaParteUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<LineaParteCreateWithoutMaterialInput, LineaParteUncheckedCreateWithoutMaterialInput> | LineaParteCreateWithoutMaterialInput[] | LineaParteUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: LineaParteCreateOrConnectWithoutMaterialInput | LineaParteCreateOrConnectWithoutMaterialInput[]
    upsert?: LineaParteUpsertWithWhereUniqueWithoutMaterialInput | LineaParteUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: LineaParteCreateManyMaterialInputEnvelope
    set?: LineaParteWhereUniqueInput | LineaParteWhereUniqueInput[]
    disconnect?: LineaParteWhereUniqueInput | LineaParteWhereUniqueInput[]
    delete?: LineaParteWhereUniqueInput | LineaParteWhereUniqueInput[]
    connect?: LineaParteWhereUniqueInput | LineaParteWhereUniqueInput[]
    update?: LineaParteUpdateWithWhereUniqueWithoutMaterialInput | LineaParteUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: LineaParteUpdateManyWithWhereWithoutMaterialInput | LineaParteUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: LineaParteScalarWhereInput | LineaParteScalarWhereInput[]
  }

  export type LineaParteUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<LineaParteCreateWithoutMaterialInput, LineaParteUncheckedCreateWithoutMaterialInput> | LineaParteCreateWithoutMaterialInput[] | LineaParteUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: LineaParteCreateOrConnectWithoutMaterialInput | LineaParteCreateOrConnectWithoutMaterialInput[]
    upsert?: LineaParteUpsertWithWhereUniqueWithoutMaterialInput | LineaParteUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: LineaParteCreateManyMaterialInputEnvelope
    set?: LineaParteWhereUniqueInput | LineaParteWhereUniqueInput[]
    disconnect?: LineaParteWhereUniqueInput | LineaParteWhereUniqueInput[]
    delete?: LineaParteWhereUniqueInput | LineaParteWhereUniqueInput[]
    connect?: LineaParteWhereUniqueInput | LineaParteWhereUniqueInput[]
    update?: LineaParteUpdateWithWhereUniqueWithoutMaterialInput | LineaParteUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: LineaParteUpdateManyWithWhereWithoutMaterialInput | LineaParteUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: LineaParteScalarWhereInput | LineaParteScalarWhereInput[]
  }

  export type ParteDeTrabajoCreateNestedManyWithoutRadioInput = {
    create?: XOR<ParteDeTrabajoCreateWithoutRadioInput, ParteDeTrabajoUncheckedCreateWithoutRadioInput> | ParteDeTrabajoCreateWithoutRadioInput[] | ParteDeTrabajoUncheckedCreateWithoutRadioInput[]
    connectOrCreate?: ParteDeTrabajoCreateOrConnectWithoutRadioInput | ParteDeTrabajoCreateOrConnectWithoutRadioInput[]
    createMany?: ParteDeTrabajoCreateManyRadioInputEnvelope
    connect?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
  }

  export type ParteDeTrabajoUncheckedCreateNestedManyWithoutRadioInput = {
    create?: XOR<ParteDeTrabajoCreateWithoutRadioInput, ParteDeTrabajoUncheckedCreateWithoutRadioInput> | ParteDeTrabajoCreateWithoutRadioInput[] | ParteDeTrabajoUncheckedCreateWithoutRadioInput[]
    connectOrCreate?: ParteDeTrabajoCreateOrConnectWithoutRadioInput | ParteDeTrabajoCreateOrConnectWithoutRadioInput[]
    createMany?: ParteDeTrabajoCreateManyRadioInputEnvelope
    connect?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
  }

  export type ParteDeTrabajoUpdateManyWithoutRadioNestedInput = {
    create?: XOR<ParteDeTrabajoCreateWithoutRadioInput, ParteDeTrabajoUncheckedCreateWithoutRadioInput> | ParteDeTrabajoCreateWithoutRadioInput[] | ParteDeTrabajoUncheckedCreateWithoutRadioInput[]
    connectOrCreate?: ParteDeTrabajoCreateOrConnectWithoutRadioInput | ParteDeTrabajoCreateOrConnectWithoutRadioInput[]
    upsert?: ParteDeTrabajoUpsertWithWhereUniqueWithoutRadioInput | ParteDeTrabajoUpsertWithWhereUniqueWithoutRadioInput[]
    createMany?: ParteDeTrabajoCreateManyRadioInputEnvelope
    set?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
    disconnect?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
    delete?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
    connect?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
    update?: ParteDeTrabajoUpdateWithWhereUniqueWithoutRadioInput | ParteDeTrabajoUpdateWithWhereUniqueWithoutRadioInput[]
    updateMany?: ParteDeTrabajoUpdateManyWithWhereWithoutRadioInput | ParteDeTrabajoUpdateManyWithWhereWithoutRadioInput[]
    deleteMany?: ParteDeTrabajoScalarWhereInput | ParteDeTrabajoScalarWhereInput[]
  }

  export type ParteDeTrabajoUncheckedUpdateManyWithoutRadioNestedInput = {
    create?: XOR<ParteDeTrabajoCreateWithoutRadioInput, ParteDeTrabajoUncheckedCreateWithoutRadioInput> | ParteDeTrabajoCreateWithoutRadioInput[] | ParteDeTrabajoUncheckedCreateWithoutRadioInput[]
    connectOrCreate?: ParteDeTrabajoCreateOrConnectWithoutRadioInput | ParteDeTrabajoCreateOrConnectWithoutRadioInput[]
    upsert?: ParteDeTrabajoUpsertWithWhereUniqueWithoutRadioInput | ParteDeTrabajoUpsertWithWhereUniqueWithoutRadioInput[]
    createMany?: ParteDeTrabajoCreateManyRadioInputEnvelope
    set?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
    disconnect?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
    delete?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
    connect?: ParteDeTrabajoWhereUniqueInput | ParteDeTrabajoWhereUniqueInput[]
    update?: ParteDeTrabajoUpdateWithWhereUniqueWithoutRadioInput | ParteDeTrabajoUpdateWithWhereUniqueWithoutRadioInput[]
    updateMany?: ParteDeTrabajoUpdateManyWithWhereWithoutRadioInput | ParteDeTrabajoUpdateManyWithWhereWithoutRadioInput[]
    deleteMany?: ParteDeTrabajoScalarWhereInput | ParteDeTrabajoScalarWhereInput[]
  }

  export type ConductorCreateNestedOneWithoutJornadasInput = {
    create?: XOR<ConductorCreateWithoutJornadasInput, ConductorUncheckedCreateWithoutJornadasInput>
    connectOrCreate?: ConductorCreateOrConnectWithoutJornadasInput
    connect?: ConductorWhereUniqueInput
  }

  export type ConductorUpdateOneRequiredWithoutJornadasNestedInput = {
    create?: XOR<ConductorCreateWithoutJornadasInput, ConductorUncheckedCreateWithoutJornadasInput>
    connectOrCreate?: ConductorCreateOrConnectWithoutJornadasInput
    upsert?: ConductorUpsertWithoutJornadasInput
    connect?: ConductorWhereUniqueInput
    update?: XOR<XOR<ConductorUpdateToOneWithWhereWithoutJornadasInput, ConductorUpdateWithoutJornadasInput>, ConductorUncheckedUpdateWithoutJornadasInput>
  }

  export type ObraCreateNestedOneWithoutPartesTrabajoInput = {
    create?: XOR<ObraCreateWithoutPartesTrabajoInput, ObraUncheckedCreateWithoutPartesTrabajoInput>
    connectOrCreate?: ObraCreateOrConnectWithoutPartesTrabajoInput
    connect?: ObraWhereUniqueInput
  }

  export type ConductorCreateNestedOneWithoutPartesTrabajoInput = {
    create?: XOR<ConductorCreateWithoutPartesTrabajoInput, ConductorUncheckedCreateWithoutPartesTrabajoInput>
    connectOrCreate?: ConductorCreateOrConnectWithoutPartesTrabajoInput
    connect?: ConductorWhereUniqueInput
  }

  export type VehiculoCreateNestedOneWithoutPartesTrabajoInput = {
    create?: XOR<VehiculoCreateWithoutPartesTrabajoInput, VehiculoUncheckedCreateWithoutPartesTrabajoInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutPartesTrabajoInput
    connect?: VehiculoWhereUniqueInput
  }

  export type RadioCreateNestedOneWithoutPartesTrabajoInput = {
    create?: XOR<RadioCreateWithoutPartesTrabajoInput, RadioUncheckedCreateWithoutPartesTrabajoInput>
    connectOrCreate?: RadioCreateOrConnectWithoutPartesTrabajoInput
    connect?: RadioWhereUniqueInput
  }

  export type LineaParteCreateNestedManyWithoutParteTrabajoInput = {
    create?: XOR<LineaParteCreateWithoutParteTrabajoInput, LineaParteUncheckedCreateWithoutParteTrabajoInput> | LineaParteCreateWithoutParteTrabajoInput[] | LineaParteUncheckedCreateWithoutParteTrabajoInput[]
    connectOrCreate?: LineaParteCreateOrConnectWithoutParteTrabajoInput | LineaParteCreateOrConnectWithoutParteTrabajoInput[]
    createMany?: LineaParteCreateManyParteTrabajoInputEnvelope
    connect?: LineaParteWhereUniqueInput | LineaParteWhereUniqueInput[]
  }

  export type LineaParteUncheckedCreateNestedManyWithoutParteTrabajoInput = {
    create?: XOR<LineaParteCreateWithoutParteTrabajoInput, LineaParteUncheckedCreateWithoutParteTrabajoInput> | LineaParteCreateWithoutParteTrabajoInput[] | LineaParteUncheckedCreateWithoutParteTrabajoInput[]
    connectOrCreate?: LineaParteCreateOrConnectWithoutParteTrabajoInput | LineaParteCreateOrConnectWithoutParteTrabajoInput[]
    createMany?: LineaParteCreateManyParteTrabajoInputEnvelope
    connect?: LineaParteWhereUniqueInput | LineaParteWhereUniqueInput[]
  }

  export type EnumEstadoParteFieldUpdateOperationsInput = {
    set?: $Enums.EstadoParte
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ObraUpdateOneRequiredWithoutPartesTrabajoNestedInput = {
    create?: XOR<ObraCreateWithoutPartesTrabajoInput, ObraUncheckedCreateWithoutPartesTrabajoInput>
    connectOrCreate?: ObraCreateOrConnectWithoutPartesTrabajoInput
    upsert?: ObraUpsertWithoutPartesTrabajoInput
    connect?: ObraWhereUniqueInput
    update?: XOR<XOR<ObraUpdateToOneWithWhereWithoutPartesTrabajoInput, ObraUpdateWithoutPartesTrabajoInput>, ObraUncheckedUpdateWithoutPartesTrabajoInput>
  }

  export type ConductorUpdateOneRequiredWithoutPartesTrabajoNestedInput = {
    create?: XOR<ConductorCreateWithoutPartesTrabajoInput, ConductorUncheckedCreateWithoutPartesTrabajoInput>
    connectOrCreate?: ConductorCreateOrConnectWithoutPartesTrabajoInput
    upsert?: ConductorUpsertWithoutPartesTrabajoInput
    connect?: ConductorWhereUniqueInput
    update?: XOR<XOR<ConductorUpdateToOneWithWhereWithoutPartesTrabajoInput, ConductorUpdateWithoutPartesTrabajoInput>, ConductorUncheckedUpdateWithoutPartesTrabajoInput>
  }

  export type VehiculoUpdateOneRequiredWithoutPartesTrabajoNestedInput = {
    create?: XOR<VehiculoCreateWithoutPartesTrabajoInput, VehiculoUncheckedCreateWithoutPartesTrabajoInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutPartesTrabajoInput
    upsert?: VehiculoUpsertWithoutPartesTrabajoInput
    connect?: VehiculoWhereUniqueInput
    update?: XOR<XOR<VehiculoUpdateToOneWithWhereWithoutPartesTrabajoInput, VehiculoUpdateWithoutPartesTrabajoInput>, VehiculoUncheckedUpdateWithoutPartesTrabajoInput>
  }

  export type RadioUpdateOneWithoutPartesTrabajoNestedInput = {
    create?: XOR<RadioCreateWithoutPartesTrabajoInput, RadioUncheckedCreateWithoutPartesTrabajoInput>
    connectOrCreate?: RadioCreateOrConnectWithoutPartesTrabajoInput
    upsert?: RadioUpsertWithoutPartesTrabajoInput
    disconnect?: RadioWhereInput | boolean
    delete?: RadioWhereInput | boolean
    connect?: RadioWhereUniqueInput
    update?: XOR<XOR<RadioUpdateToOneWithWhereWithoutPartesTrabajoInput, RadioUpdateWithoutPartesTrabajoInput>, RadioUncheckedUpdateWithoutPartesTrabajoInput>
  }

  export type LineaParteUpdateManyWithoutParteTrabajoNestedInput = {
    create?: XOR<LineaParteCreateWithoutParteTrabajoInput, LineaParteUncheckedCreateWithoutParteTrabajoInput> | LineaParteCreateWithoutParteTrabajoInput[] | LineaParteUncheckedCreateWithoutParteTrabajoInput[]
    connectOrCreate?: LineaParteCreateOrConnectWithoutParteTrabajoInput | LineaParteCreateOrConnectWithoutParteTrabajoInput[]
    upsert?: LineaParteUpsertWithWhereUniqueWithoutParteTrabajoInput | LineaParteUpsertWithWhereUniqueWithoutParteTrabajoInput[]
    createMany?: LineaParteCreateManyParteTrabajoInputEnvelope
    set?: LineaParteWhereUniqueInput | LineaParteWhereUniqueInput[]
    disconnect?: LineaParteWhereUniqueInput | LineaParteWhereUniqueInput[]
    delete?: LineaParteWhereUniqueInput | LineaParteWhereUniqueInput[]
    connect?: LineaParteWhereUniqueInput | LineaParteWhereUniqueInput[]
    update?: LineaParteUpdateWithWhereUniqueWithoutParteTrabajoInput | LineaParteUpdateWithWhereUniqueWithoutParteTrabajoInput[]
    updateMany?: LineaParteUpdateManyWithWhereWithoutParteTrabajoInput | LineaParteUpdateManyWithWhereWithoutParteTrabajoInput[]
    deleteMany?: LineaParteScalarWhereInput | LineaParteScalarWhereInput[]
  }

  export type LineaParteUncheckedUpdateManyWithoutParteTrabajoNestedInput = {
    create?: XOR<LineaParteCreateWithoutParteTrabajoInput, LineaParteUncheckedCreateWithoutParteTrabajoInput> | LineaParteCreateWithoutParteTrabajoInput[] | LineaParteUncheckedCreateWithoutParteTrabajoInput[]
    connectOrCreate?: LineaParteCreateOrConnectWithoutParteTrabajoInput | LineaParteCreateOrConnectWithoutParteTrabajoInput[]
    upsert?: LineaParteUpsertWithWhereUniqueWithoutParteTrabajoInput | LineaParteUpsertWithWhereUniqueWithoutParteTrabajoInput[]
    createMany?: LineaParteCreateManyParteTrabajoInputEnvelope
    set?: LineaParteWhereUniqueInput | LineaParteWhereUniqueInput[]
    disconnect?: LineaParteWhereUniqueInput | LineaParteWhereUniqueInput[]
    delete?: LineaParteWhereUniqueInput | LineaParteWhereUniqueInput[]
    connect?: LineaParteWhereUniqueInput | LineaParteWhereUniqueInput[]
    update?: LineaParteUpdateWithWhereUniqueWithoutParteTrabajoInput | LineaParteUpdateWithWhereUniqueWithoutParteTrabajoInput[]
    updateMany?: LineaParteUpdateManyWithWhereWithoutParteTrabajoInput | LineaParteUpdateManyWithWhereWithoutParteTrabajoInput[]
    deleteMany?: LineaParteScalarWhereInput | LineaParteScalarWhereInput[]
  }

  export type ParteDeTrabajoCreateNestedOneWithoutLineasParteInput = {
    create?: XOR<ParteDeTrabajoCreateWithoutLineasParteInput, ParteDeTrabajoUncheckedCreateWithoutLineasParteInput>
    connectOrCreate?: ParteDeTrabajoCreateOrConnectWithoutLineasParteInput
    connect?: ParteDeTrabajoWhereUniqueInput
  }

  export type VehiculoCreateNestedOneWithoutLineasParteInput = {
    create?: XOR<VehiculoCreateWithoutLineasParteInput, VehiculoUncheckedCreateWithoutLineasParteInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutLineasParteInput
    connect?: VehiculoWhereUniqueInput
  }

  export type MaterialCreateNestedOneWithoutLineasParteInput = {
    create?: XOR<MaterialCreateWithoutLineasParteInput, MaterialUncheckedCreateWithoutLineasParteInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutLineasParteInput
    connect?: MaterialWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ParteDeTrabajoUpdateOneRequiredWithoutLineasParteNestedInput = {
    create?: XOR<ParteDeTrabajoCreateWithoutLineasParteInput, ParteDeTrabajoUncheckedCreateWithoutLineasParteInput>
    connectOrCreate?: ParteDeTrabajoCreateOrConnectWithoutLineasParteInput
    upsert?: ParteDeTrabajoUpsertWithoutLineasParteInput
    connect?: ParteDeTrabajoWhereUniqueInput
    update?: XOR<XOR<ParteDeTrabajoUpdateToOneWithWhereWithoutLineasParteInput, ParteDeTrabajoUpdateWithoutLineasParteInput>, ParteDeTrabajoUncheckedUpdateWithoutLineasParteInput>
  }

  export type VehiculoUpdateOneRequiredWithoutLineasParteNestedInput = {
    create?: XOR<VehiculoCreateWithoutLineasParteInput, VehiculoUncheckedCreateWithoutLineasParteInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutLineasParteInput
    upsert?: VehiculoUpsertWithoutLineasParteInput
    connect?: VehiculoWhereUniqueInput
    update?: XOR<XOR<VehiculoUpdateToOneWithWhereWithoutLineasParteInput, VehiculoUpdateWithoutLineasParteInput>, VehiculoUncheckedUpdateWithoutLineasParteInput>
  }

  export type MaterialUpdateOneRequiredWithoutLineasParteNestedInput = {
    create?: XOR<MaterialCreateWithoutLineasParteInput, MaterialUncheckedCreateWithoutLineasParteInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutLineasParteInput
    upsert?: MaterialUpsertWithoutLineasParteInput
    connect?: MaterialWhereUniqueInput
    update?: XOR<XOR<MaterialUpdateToOneWithWhereWithoutLineasParteInput, MaterialUpdateWithoutLineasParteInput>, MaterialUncheckedUpdateWithoutLineasParteInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumTipoVehiculoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoVehiculo | EnumTipoVehiculoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoVehiculo[] | ListEnumTipoVehiculoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoVehiculo[] | ListEnumTipoVehiculoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoVehiculoFilter<$PrismaModel> | $Enums.TipoVehiculo
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTipoVehiculoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoVehiculo | EnumTipoVehiculoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoVehiculo[] | ListEnumTipoVehiculoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoVehiculo[] | ListEnumTipoVehiculoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoVehiculoWithAggregatesFilter<$PrismaModel> | $Enums.TipoVehiculo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoVehiculoFilter<$PrismaModel>
    _max?: NestedEnumTipoVehiculoFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumEstadoParteFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoParte | EnumEstadoParteFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoParte[] | ListEnumEstadoParteFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoParte[] | ListEnumEstadoParteFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoParteFilter<$PrismaModel> | $Enums.EstadoParte
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumEstadoParteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoParte | EnumEstadoParteFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoParte[] | ListEnumEstadoParteFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoParte[] | ListEnumEstadoParteFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoParteWithAggregatesFilter<$PrismaModel> | $Enums.EstadoParte
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoParteFilter<$PrismaModel>
    _max?: NestedEnumEstadoParteFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ObraCreateWithoutClienteInput = {
    id?: string
    nombre: string
    direccion: string
    codigoPostal: string
    ciudad: string
    provincia: string
    estado?: string
    fechaInicio: Date | string
    fechaFin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    partesTrabajo?: ParteDeTrabajoCreateNestedManyWithoutObraInput
  }

  export type ObraUncheckedCreateWithoutClienteInput = {
    id?: string
    nombre: string
    direccion: string
    codigoPostal: string
    ciudad: string
    provincia: string
    estado?: string
    fechaInicio: Date | string
    fechaFin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    partesTrabajo?: ParteDeTrabajoUncheckedCreateNestedManyWithoutObraInput
  }

  export type ObraCreateOrConnectWithoutClienteInput = {
    where: ObraWhereUniqueInput
    create: XOR<ObraCreateWithoutClienteInput, ObraUncheckedCreateWithoutClienteInput>
  }

  export type ObraCreateManyClienteInputEnvelope = {
    data: ObraCreateManyClienteInput | ObraCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type ObraUpsertWithWhereUniqueWithoutClienteInput = {
    where: ObraWhereUniqueInput
    update: XOR<ObraUpdateWithoutClienteInput, ObraUncheckedUpdateWithoutClienteInput>
    create: XOR<ObraCreateWithoutClienteInput, ObraUncheckedCreateWithoutClienteInput>
  }

  export type ObraUpdateWithWhereUniqueWithoutClienteInput = {
    where: ObraWhereUniqueInput
    data: XOR<ObraUpdateWithoutClienteInput, ObraUncheckedUpdateWithoutClienteInput>
  }

  export type ObraUpdateManyWithWhereWithoutClienteInput = {
    where: ObraScalarWhereInput
    data: XOR<ObraUpdateManyMutationInput, ObraUncheckedUpdateManyWithoutClienteInput>
  }

  export type ObraScalarWhereInput = {
    AND?: ObraScalarWhereInput | ObraScalarWhereInput[]
    OR?: ObraScalarWhereInput[]
    NOT?: ObraScalarWhereInput | ObraScalarWhereInput[]
    id?: StringFilter<"Obra"> | string
    nombre?: StringFilter<"Obra"> | string
    direccion?: StringFilter<"Obra"> | string
    codigoPostal?: StringFilter<"Obra"> | string
    ciudad?: StringFilter<"Obra"> | string
    provincia?: StringFilter<"Obra"> | string
    estado?: StringFilter<"Obra"> | string
    fechaInicio?: DateTimeFilter<"Obra"> | Date | string
    fechaFin?: DateTimeNullableFilter<"Obra"> | Date | string | null
    createdAt?: DateTimeFilter<"Obra"> | Date | string
    updatedAt?: DateTimeFilter<"Obra"> | Date | string
    clienteId?: StringFilter<"Obra"> | string
  }

  export type ClienteCreateWithoutObrasInput = {
    id?: string
    nombre: string
    cif: string
    direccion: string
    codigoPostal: string
    ciudad: string
    provincia: string
    telefono?: string | null
    email?: string | null
    contacto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteUncheckedCreateWithoutObrasInput = {
    id?: string
    nombre: string
    cif: string
    direccion: string
    codigoPostal: string
    ciudad: string
    provincia: string
    telefono?: string | null
    email?: string | null
    contacto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteCreateOrConnectWithoutObrasInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutObrasInput, ClienteUncheckedCreateWithoutObrasInput>
  }

  export type ParteDeTrabajoCreateWithoutObraInput = {
    id?: string
    fecha: Date | string
    estado?: $Enums.EstadoParte
    observaciones?: string | null
    firmado?: boolean
    numeroAlbaran?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conductor: ConductorCreateNestedOneWithoutPartesTrabajoInput
    vehiculo: VehiculoCreateNestedOneWithoutPartesTrabajoInput
    radio?: RadioCreateNestedOneWithoutPartesTrabajoInput
    lineasParte?: LineaParteCreateNestedManyWithoutParteTrabajoInput
  }

  export type ParteDeTrabajoUncheckedCreateWithoutObraInput = {
    id?: string
    fecha: Date | string
    estado?: $Enums.EstadoParte
    observaciones?: string | null
    firmado?: boolean
    numeroAlbaran?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conductorId: string
    vehiculoId: string
    radioId?: string | null
    lineasParte?: LineaParteUncheckedCreateNestedManyWithoutParteTrabajoInput
  }

  export type ParteDeTrabajoCreateOrConnectWithoutObraInput = {
    where: ParteDeTrabajoWhereUniqueInput
    create: XOR<ParteDeTrabajoCreateWithoutObraInput, ParteDeTrabajoUncheckedCreateWithoutObraInput>
  }

  export type ParteDeTrabajoCreateManyObraInputEnvelope = {
    data: ParteDeTrabajoCreateManyObraInput | ParteDeTrabajoCreateManyObraInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithoutObrasInput = {
    update: XOR<ClienteUpdateWithoutObrasInput, ClienteUncheckedUpdateWithoutObrasInput>
    create: XOR<ClienteCreateWithoutObrasInput, ClienteUncheckedCreateWithoutObrasInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutObrasInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutObrasInput, ClienteUncheckedUpdateWithoutObrasInput>
  }

  export type ClienteUpdateWithoutObrasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    cif?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    codigoPostal?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateWithoutObrasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    cif?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    codigoPostal?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParteDeTrabajoUpsertWithWhereUniqueWithoutObraInput = {
    where: ParteDeTrabajoWhereUniqueInput
    update: XOR<ParteDeTrabajoUpdateWithoutObraInput, ParteDeTrabajoUncheckedUpdateWithoutObraInput>
    create: XOR<ParteDeTrabajoCreateWithoutObraInput, ParteDeTrabajoUncheckedCreateWithoutObraInput>
  }

  export type ParteDeTrabajoUpdateWithWhereUniqueWithoutObraInput = {
    where: ParteDeTrabajoWhereUniqueInput
    data: XOR<ParteDeTrabajoUpdateWithoutObraInput, ParteDeTrabajoUncheckedUpdateWithoutObraInput>
  }

  export type ParteDeTrabajoUpdateManyWithWhereWithoutObraInput = {
    where: ParteDeTrabajoScalarWhereInput
    data: XOR<ParteDeTrabajoUpdateManyMutationInput, ParteDeTrabajoUncheckedUpdateManyWithoutObraInput>
  }

  export type ParteDeTrabajoScalarWhereInput = {
    AND?: ParteDeTrabajoScalarWhereInput | ParteDeTrabajoScalarWhereInput[]
    OR?: ParteDeTrabajoScalarWhereInput[]
    NOT?: ParteDeTrabajoScalarWhereInput | ParteDeTrabajoScalarWhereInput[]
    id?: StringFilter<"ParteDeTrabajo"> | string
    fecha?: DateTimeFilter<"ParteDeTrabajo"> | Date | string
    estado?: EnumEstadoParteFilter<"ParteDeTrabajo"> | $Enums.EstadoParte
    observaciones?: StringNullableFilter<"ParteDeTrabajo"> | string | null
    firmado?: BoolFilter<"ParteDeTrabajo"> | boolean
    numeroAlbaran?: StringNullableFilter<"ParteDeTrabajo"> | string | null
    createdAt?: DateTimeFilter<"ParteDeTrabajo"> | Date | string
    updatedAt?: DateTimeFilter<"ParteDeTrabajo"> | Date | string
    obraId?: StringFilter<"ParteDeTrabajo"> | string
    conductorId?: StringFilter<"ParteDeTrabajo"> | string
    vehiculoId?: StringFilter<"ParteDeTrabajo"> | string
    radioId?: StringNullableFilter<"ParteDeTrabajo"> | string | null
  }

  export type VehiculoCreateWithoutTransportistaInput = {
    id?: string
    matricula: string
    tipo: $Enums.TipoVehiculo
    marca: string
    modelo: string
    capacidad?: number | null
    año?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    partesTrabajo?: ParteDeTrabajoCreateNestedManyWithoutVehiculoInput
    lineasParte?: LineaParteCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoUncheckedCreateWithoutTransportistaInput = {
    id?: string
    matricula: string
    tipo: $Enums.TipoVehiculo
    marca: string
    modelo: string
    capacidad?: number | null
    año?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    partesTrabajo?: ParteDeTrabajoUncheckedCreateNestedManyWithoutVehiculoInput
    lineasParte?: LineaParteUncheckedCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoCreateOrConnectWithoutTransportistaInput = {
    where: VehiculoWhereUniqueInput
    create: XOR<VehiculoCreateWithoutTransportistaInput, VehiculoUncheckedCreateWithoutTransportistaInput>
  }

  export type VehiculoCreateManyTransportistaInputEnvelope = {
    data: VehiculoCreateManyTransportistaInput | VehiculoCreateManyTransportistaInput[]
    skipDuplicates?: boolean
  }

  export type VehiculoUpsertWithWhereUniqueWithoutTransportistaInput = {
    where: VehiculoWhereUniqueInput
    update: XOR<VehiculoUpdateWithoutTransportistaInput, VehiculoUncheckedUpdateWithoutTransportistaInput>
    create: XOR<VehiculoCreateWithoutTransportistaInput, VehiculoUncheckedCreateWithoutTransportistaInput>
  }

  export type VehiculoUpdateWithWhereUniqueWithoutTransportistaInput = {
    where: VehiculoWhereUniqueInput
    data: XOR<VehiculoUpdateWithoutTransportistaInput, VehiculoUncheckedUpdateWithoutTransportistaInput>
  }

  export type VehiculoUpdateManyWithWhereWithoutTransportistaInput = {
    where: VehiculoScalarWhereInput
    data: XOR<VehiculoUpdateManyMutationInput, VehiculoUncheckedUpdateManyWithoutTransportistaInput>
  }

  export type VehiculoScalarWhereInput = {
    AND?: VehiculoScalarWhereInput | VehiculoScalarWhereInput[]
    OR?: VehiculoScalarWhereInput[]
    NOT?: VehiculoScalarWhereInput | VehiculoScalarWhereInput[]
    id?: StringFilter<"Vehiculo"> | string
    matricula?: StringFilter<"Vehiculo"> | string
    tipo?: EnumTipoVehiculoFilter<"Vehiculo"> | $Enums.TipoVehiculo
    marca?: StringFilter<"Vehiculo"> | string
    modelo?: StringFilter<"Vehiculo"> | string
    capacidad?: FloatNullableFilter<"Vehiculo"> | number | null
    año?: IntNullableFilter<"Vehiculo"> | number | null
    createdAt?: DateTimeFilter<"Vehiculo"> | Date | string
    updatedAt?: DateTimeFilter<"Vehiculo"> | Date | string
    transportistaId?: StringNullableFilter<"Vehiculo"> | string | null
  }

  export type TransportistaCreateWithoutVehiculosInput = {
    id?: string
    nombre: string
    cif: string
    direccion?: string | null
    telefono?: string | null
    email?: string | null
    contacto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransportistaUncheckedCreateWithoutVehiculosInput = {
    id?: string
    nombre: string
    cif: string
    direccion?: string | null
    telefono?: string | null
    email?: string | null
    contacto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransportistaCreateOrConnectWithoutVehiculosInput = {
    where: TransportistaWhereUniqueInput
    create: XOR<TransportistaCreateWithoutVehiculosInput, TransportistaUncheckedCreateWithoutVehiculosInput>
  }

  export type ParteDeTrabajoCreateWithoutVehiculoInput = {
    id?: string
    fecha: Date | string
    estado?: $Enums.EstadoParte
    observaciones?: string | null
    firmado?: boolean
    numeroAlbaran?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    obra: ObraCreateNestedOneWithoutPartesTrabajoInput
    conductor: ConductorCreateNestedOneWithoutPartesTrabajoInput
    radio?: RadioCreateNestedOneWithoutPartesTrabajoInput
    lineasParte?: LineaParteCreateNestedManyWithoutParteTrabajoInput
  }

  export type ParteDeTrabajoUncheckedCreateWithoutVehiculoInput = {
    id?: string
    fecha: Date | string
    estado?: $Enums.EstadoParte
    observaciones?: string | null
    firmado?: boolean
    numeroAlbaran?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    obraId: string
    conductorId: string
    radioId?: string | null
    lineasParte?: LineaParteUncheckedCreateNestedManyWithoutParteTrabajoInput
  }

  export type ParteDeTrabajoCreateOrConnectWithoutVehiculoInput = {
    where: ParteDeTrabajoWhereUniqueInput
    create: XOR<ParteDeTrabajoCreateWithoutVehiculoInput, ParteDeTrabajoUncheckedCreateWithoutVehiculoInput>
  }

  export type ParteDeTrabajoCreateManyVehiculoInputEnvelope = {
    data: ParteDeTrabajoCreateManyVehiculoInput | ParteDeTrabajoCreateManyVehiculoInput[]
    skipDuplicates?: boolean
  }

  export type LineaParteCreateWithoutVehiculoInput = {
    id?: string
    horaSalida: Date | string
    horaLlegada: Date | string
    cantidad: number
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parteTrabajo: ParteDeTrabajoCreateNestedOneWithoutLineasParteInput
    material: MaterialCreateNestedOneWithoutLineasParteInput
  }

  export type LineaParteUncheckedCreateWithoutVehiculoInput = {
    id?: string
    horaSalida: Date | string
    horaLlegada: Date | string
    cantidad: number
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parteTrabajoId: string
    materialId: string
  }

  export type LineaParteCreateOrConnectWithoutVehiculoInput = {
    where: LineaParteWhereUniqueInput
    create: XOR<LineaParteCreateWithoutVehiculoInput, LineaParteUncheckedCreateWithoutVehiculoInput>
  }

  export type LineaParteCreateManyVehiculoInputEnvelope = {
    data: LineaParteCreateManyVehiculoInput | LineaParteCreateManyVehiculoInput[]
    skipDuplicates?: boolean
  }

  export type TransportistaUpsertWithoutVehiculosInput = {
    update: XOR<TransportistaUpdateWithoutVehiculosInput, TransportistaUncheckedUpdateWithoutVehiculosInput>
    create: XOR<TransportistaCreateWithoutVehiculosInput, TransportistaUncheckedCreateWithoutVehiculosInput>
    where?: TransportistaWhereInput
  }

  export type TransportistaUpdateToOneWithWhereWithoutVehiculosInput = {
    where?: TransportistaWhereInput
    data: XOR<TransportistaUpdateWithoutVehiculosInput, TransportistaUncheckedUpdateWithoutVehiculosInput>
  }

  export type TransportistaUpdateWithoutVehiculosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    cif?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransportistaUncheckedUpdateWithoutVehiculosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    cif?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParteDeTrabajoUpsertWithWhereUniqueWithoutVehiculoInput = {
    where: ParteDeTrabajoWhereUniqueInput
    update: XOR<ParteDeTrabajoUpdateWithoutVehiculoInput, ParteDeTrabajoUncheckedUpdateWithoutVehiculoInput>
    create: XOR<ParteDeTrabajoCreateWithoutVehiculoInput, ParteDeTrabajoUncheckedCreateWithoutVehiculoInput>
  }

  export type ParteDeTrabajoUpdateWithWhereUniqueWithoutVehiculoInput = {
    where: ParteDeTrabajoWhereUniqueInput
    data: XOR<ParteDeTrabajoUpdateWithoutVehiculoInput, ParteDeTrabajoUncheckedUpdateWithoutVehiculoInput>
  }

  export type ParteDeTrabajoUpdateManyWithWhereWithoutVehiculoInput = {
    where: ParteDeTrabajoScalarWhereInput
    data: XOR<ParteDeTrabajoUpdateManyMutationInput, ParteDeTrabajoUncheckedUpdateManyWithoutVehiculoInput>
  }

  export type LineaParteUpsertWithWhereUniqueWithoutVehiculoInput = {
    where: LineaParteWhereUniqueInput
    update: XOR<LineaParteUpdateWithoutVehiculoInput, LineaParteUncheckedUpdateWithoutVehiculoInput>
    create: XOR<LineaParteCreateWithoutVehiculoInput, LineaParteUncheckedCreateWithoutVehiculoInput>
  }

  export type LineaParteUpdateWithWhereUniqueWithoutVehiculoInput = {
    where: LineaParteWhereUniqueInput
    data: XOR<LineaParteUpdateWithoutVehiculoInput, LineaParteUncheckedUpdateWithoutVehiculoInput>
  }

  export type LineaParteUpdateManyWithWhereWithoutVehiculoInput = {
    where: LineaParteScalarWhereInput
    data: XOR<LineaParteUpdateManyMutationInput, LineaParteUncheckedUpdateManyWithoutVehiculoInput>
  }

  export type LineaParteScalarWhereInput = {
    AND?: LineaParteScalarWhereInput | LineaParteScalarWhereInput[]
    OR?: LineaParteScalarWhereInput[]
    NOT?: LineaParteScalarWhereInput | LineaParteScalarWhereInput[]
    id?: StringFilter<"LineaParte"> | string
    horaSalida?: DateTimeFilter<"LineaParte"> | Date | string
    horaLlegada?: DateTimeFilter<"LineaParte"> | Date | string
    cantidad?: FloatFilter<"LineaParte"> | number
    observaciones?: StringNullableFilter<"LineaParte"> | string | null
    createdAt?: DateTimeFilter<"LineaParte"> | Date | string
    updatedAt?: DateTimeFilter<"LineaParte"> | Date | string
    parteTrabajoId?: StringFilter<"LineaParte"> | string
    vehiculoId?: StringFilter<"LineaParte"> | string
    materialId?: StringFilter<"LineaParte"> | string
  }

  export type ParteDeTrabajoCreateWithoutConductorInput = {
    id?: string
    fecha: Date | string
    estado?: $Enums.EstadoParte
    observaciones?: string | null
    firmado?: boolean
    numeroAlbaran?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    obra: ObraCreateNestedOneWithoutPartesTrabajoInput
    vehiculo: VehiculoCreateNestedOneWithoutPartesTrabajoInput
    radio?: RadioCreateNestedOneWithoutPartesTrabajoInput
    lineasParte?: LineaParteCreateNestedManyWithoutParteTrabajoInput
  }

  export type ParteDeTrabajoUncheckedCreateWithoutConductorInput = {
    id?: string
    fecha: Date | string
    estado?: $Enums.EstadoParte
    observaciones?: string | null
    firmado?: boolean
    numeroAlbaran?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    obraId: string
    vehiculoId: string
    radioId?: string | null
    lineasParte?: LineaParteUncheckedCreateNestedManyWithoutParteTrabajoInput
  }

  export type ParteDeTrabajoCreateOrConnectWithoutConductorInput = {
    where: ParteDeTrabajoWhereUniqueInput
    create: XOR<ParteDeTrabajoCreateWithoutConductorInput, ParteDeTrabajoUncheckedCreateWithoutConductorInput>
  }

  export type ParteDeTrabajoCreateManyConductorInputEnvelope = {
    data: ParteDeTrabajoCreateManyConductorInput | ParteDeTrabajoCreateManyConductorInput[]
    skipDuplicates?: boolean
  }

  export type JornadaCreateWithoutConductorInput = {
    id?: string
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JornadaUncheckedCreateWithoutConductorInput = {
    id?: string
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JornadaCreateOrConnectWithoutConductorInput = {
    where: JornadaWhereUniqueInput
    create: XOR<JornadaCreateWithoutConductorInput, JornadaUncheckedCreateWithoutConductorInput>
  }

  export type JornadaCreateManyConductorInputEnvelope = {
    data: JornadaCreateManyConductorInput | JornadaCreateManyConductorInput[]
    skipDuplicates?: boolean
  }

  export type ParteDeTrabajoUpsertWithWhereUniqueWithoutConductorInput = {
    where: ParteDeTrabajoWhereUniqueInput
    update: XOR<ParteDeTrabajoUpdateWithoutConductorInput, ParteDeTrabajoUncheckedUpdateWithoutConductorInput>
    create: XOR<ParteDeTrabajoCreateWithoutConductorInput, ParteDeTrabajoUncheckedCreateWithoutConductorInput>
  }

  export type ParteDeTrabajoUpdateWithWhereUniqueWithoutConductorInput = {
    where: ParteDeTrabajoWhereUniqueInput
    data: XOR<ParteDeTrabajoUpdateWithoutConductorInput, ParteDeTrabajoUncheckedUpdateWithoutConductorInput>
  }

  export type ParteDeTrabajoUpdateManyWithWhereWithoutConductorInput = {
    where: ParteDeTrabajoScalarWhereInput
    data: XOR<ParteDeTrabajoUpdateManyMutationInput, ParteDeTrabajoUncheckedUpdateManyWithoutConductorInput>
  }

  export type JornadaUpsertWithWhereUniqueWithoutConductorInput = {
    where: JornadaWhereUniqueInput
    update: XOR<JornadaUpdateWithoutConductorInput, JornadaUncheckedUpdateWithoutConductorInput>
    create: XOR<JornadaCreateWithoutConductorInput, JornadaUncheckedCreateWithoutConductorInput>
  }

  export type JornadaUpdateWithWhereUniqueWithoutConductorInput = {
    where: JornadaWhereUniqueInput
    data: XOR<JornadaUpdateWithoutConductorInput, JornadaUncheckedUpdateWithoutConductorInput>
  }

  export type JornadaUpdateManyWithWhereWithoutConductorInput = {
    where: JornadaScalarWhereInput
    data: XOR<JornadaUpdateManyMutationInput, JornadaUncheckedUpdateManyWithoutConductorInput>
  }

  export type JornadaScalarWhereInput = {
    AND?: JornadaScalarWhereInput | JornadaScalarWhereInput[]
    OR?: JornadaScalarWhereInput[]
    NOT?: JornadaScalarWhereInput | JornadaScalarWhereInput[]
    id?: StringFilter<"Jornada"> | string
    fecha?: DateTimeFilter<"Jornada"> | Date | string
    horaInicio?: DateTimeFilter<"Jornada"> | Date | string
    horaFin?: DateTimeFilter<"Jornada"> | Date | string
    observaciones?: StringNullableFilter<"Jornada"> | string | null
    createdAt?: DateTimeFilter<"Jornada"> | Date | string
    updatedAt?: DateTimeFilter<"Jornada"> | Date | string
    conductorId?: StringFilter<"Jornada"> | string
  }

  export type LineaParteCreateWithoutMaterialInput = {
    id?: string
    horaSalida: Date | string
    horaLlegada: Date | string
    cantidad: number
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parteTrabajo: ParteDeTrabajoCreateNestedOneWithoutLineasParteInput
    vehiculo: VehiculoCreateNestedOneWithoutLineasParteInput
  }

  export type LineaParteUncheckedCreateWithoutMaterialInput = {
    id?: string
    horaSalida: Date | string
    horaLlegada: Date | string
    cantidad: number
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parteTrabajoId: string
    vehiculoId: string
  }

  export type LineaParteCreateOrConnectWithoutMaterialInput = {
    where: LineaParteWhereUniqueInput
    create: XOR<LineaParteCreateWithoutMaterialInput, LineaParteUncheckedCreateWithoutMaterialInput>
  }

  export type LineaParteCreateManyMaterialInputEnvelope = {
    data: LineaParteCreateManyMaterialInput | LineaParteCreateManyMaterialInput[]
    skipDuplicates?: boolean
  }

  export type LineaParteUpsertWithWhereUniqueWithoutMaterialInput = {
    where: LineaParteWhereUniqueInput
    update: XOR<LineaParteUpdateWithoutMaterialInput, LineaParteUncheckedUpdateWithoutMaterialInput>
    create: XOR<LineaParteCreateWithoutMaterialInput, LineaParteUncheckedCreateWithoutMaterialInput>
  }

  export type LineaParteUpdateWithWhereUniqueWithoutMaterialInput = {
    where: LineaParteWhereUniqueInput
    data: XOR<LineaParteUpdateWithoutMaterialInput, LineaParteUncheckedUpdateWithoutMaterialInput>
  }

  export type LineaParteUpdateManyWithWhereWithoutMaterialInput = {
    where: LineaParteScalarWhereInput
    data: XOR<LineaParteUpdateManyMutationInput, LineaParteUncheckedUpdateManyWithoutMaterialInput>
  }

  export type ParteDeTrabajoCreateWithoutRadioInput = {
    id?: string
    fecha: Date | string
    estado?: $Enums.EstadoParte
    observaciones?: string | null
    firmado?: boolean
    numeroAlbaran?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    obra: ObraCreateNestedOneWithoutPartesTrabajoInput
    conductor: ConductorCreateNestedOneWithoutPartesTrabajoInput
    vehiculo: VehiculoCreateNestedOneWithoutPartesTrabajoInput
    lineasParte?: LineaParteCreateNestedManyWithoutParteTrabajoInput
  }

  export type ParteDeTrabajoUncheckedCreateWithoutRadioInput = {
    id?: string
    fecha: Date | string
    estado?: $Enums.EstadoParte
    observaciones?: string | null
    firmado?: boolean
    numeroAlbaran?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    obraId: string
    conductorId: string
    vehiculoId: string
    lineasParte?: LineaParteUncheckedCreateNestedManyWithoutParteTrabajoInput
  }

  export type ParteDeTrabajoCreateOrConnectWithoutRadioInput = {
    where: ParteDeTrabajoWhereUniqueInput
    create: XOR<ParteDeTrabajoCreateWithoutRadioInput, ParteDeTrabajoUncheckedCreateWithoutRadioInput>
  }

  export type ParteDeTrabajoCreateManyRadioInputEnvelope = {
    data: ParteDeTrabajoCreateManyRadioInput | ParteDeTrabajoCreateManyRadioInput[]
    skipDuplicates?: boolean
  }

  export type ParteDeTrabajoUpsertWithWhereUniqueWithoutRadioInput = {
    where: ParteDeTrabajoWhereUniqueInput
    update: XOR<ParteDeTrabajoUpdateWithoutRadioInput, ParteDeTrabajoUncheckedUpdateWithoutRadioInput>
    create: XOR<ParteDeTrabajoCreateWithoutRadioInput, ParteDeTrabajoUncheckedCreateWithoutRadioInput>
  }

  export type ParteDeTrabajoUpdateWithWhereUniqueWithoutRadioInput = {
    where: ParteDeTrabajoWhereUniqueInput
    data: XOR<ParteDeTrabajoUpdateWithoutRadioInput, ParteDeTrabajoUncheckedUpdateWithoutRadioInput>
  }

  export type ParteDeTrabajoUpdateManyWithWhereWithoutRadioInput = {
    where: ParteDeTrabajoScalarWhereInput
    data: XOR<ParteDeTrabajoUpdateManyMutationInput, ParteDeTrabajoUncheckedUpdateManyWithoutRadioInput>
  }

  export type ConductorCreateWithoutJornadasInput = {
    id?: string
    nombre: string
    apellidos: string
    dni: string
    telefono?: string | null
    email?: string | null
    licencia?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    partesTrabajo?: ParteDeTrabajoCreateNestedManyWithoutConductorInput
  }

  export type ConductorUncheckedCreateWithoutJornadasInput = {
    id?: string
    nombre: string
    apellidos: string
    dni: string
    telefono?: string | null
    email?: string | null
    licencia?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    partesTrabajo?: ParteDeTrabajoUncheckedCreateNestedManyWithoutConductorInput
  }

  export type ConductorCreateOrConnectWithoutJornadasInput = {
    where: ConductorWhereUniqueInput
    create: XOR<ConductorCreateWithoutJornadasInput, ConductorUncheckedCreateWithoutJornadasInput>
  }

  export type ConductorUpsertWithoutJornadasInput = {
    update: XOR<ConductorUpdateWithoutJornadasInput, ConductorUncheckedUpdateWithoutJornadasInput>
    create: XOR<ConductorCreateWithoutJornadasInput, ConductorUncheckedCreateWithoutJornadasInput>
    where?: ConductorWhereInput
  }

  export type ConductorUpdateToOneWithWhereWithoutJornadasInput = {
    where?: ConductorWhereInput
    data: XOR<ConductorUpdateWithoutJornadasInput, ConductorUncheckedUpdateWithoutJornadasInput>
  }

  export type ConductorUpdateWithoutJornadasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    licencia?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partesTrabajo?: ParteDeTrabajoUpdateManyWithoutConductorNestedInput
  }

  export type ConductorUncheckedUpdateWithoutJornadasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    licencia?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partesTrabajo?: ParteDeTrabajoUncheckedUpdateManyWithoutConductorNestedInput
  }

  export type ObraCreateWithoutPartesTrabajoInput = {
    id?: string
    nombre: string
    direccion: string
    codigoPostal: string
    ciudad: string
    provincia: string
    estado?: string
    fechaInicio: Date | string
    fechaFin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutObrasInput
  }

  export type ObraUncheckedCreateWithoutPartesTrabajoInput = {
    id?: string
    nombre: string
    direccion: string
    codigoPostal: string
    ciudad: string
    provincia: string
    estado?: string
    fechaInicio: Date | string
    fechaFin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clienteId: string
  }

  export type ObraCreateOrConnectWithoutPartesTrabajoInput = {
    where: ObraWhereUniqueInput
    create: XOR<ObraCreateWithoutPartesTrabajoInput, ObraUncheckedCreateWithoutPartesTrabajoInput>
  }

  export type ConductorCreateWithoutPartesTrabajoInput = {
    id?: string
    nombre: string
    apellidos: string
    dni: string
    telefono?: string | null
    email?: string | null
    licencia?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jornadas?: JornadaCreateNestedManyWithoutConductorInput
  }

  export type ConductorUncheckedCreateWithoutPartesTrabajoInput = {
    id?: string
    nombre: string
    apellidos: string
    dni: string
    telefono?: string | null
    email?: string | null
    licencia?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jornadas?: JornadaUncheckedCreateNestedManyWithoutConductorInput
  }

  export type ConductorCreateOrConnectWithoutPartesTrabajoInput = {
    where: ConductorWhereUniqueInput
    create: XOR<ConductorCreateWithoutPartesTrabajoInput, ConductorUncheckedCreateWithoutPartesTrabajoInput>
  }

  export type VehiculoCreateWithoutPartesTrabajoInput = {
    id?: string
    matricula: string
    tipo: $Enums.TipoVehiculo
    marca: string
    modelo: string
    capacidad?: number | null
    año?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transportista?: TransportistaCreateNestedOneWithoutVehiculosInput
    lineasParte?: LineaParteCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoUncheckedCreateWithoutPartesTrabajoInput = {
    id?: string
    matricula: string
    tipo: $Enums.TipoVehiculo
    marca: string
    modelo: string
    capacidad?: number | null
    año?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transportistaId?: string | null
    lineasParte?: LineaParteUncheckedCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoCreateOrConnectWithoutPartesTrabajoInput = {
    where: VehiculoWhereUniqueInput
    create: XOR<VehiculoCreateWithoutPartesTrabajoInput, VehiculoUncheckedCreateWithoutPartesTrabajoInput>
  }

  export type RadioCreateWithoutPartesTrabajoInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    ciudad: string
    provincia: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RadioUncheckedCreateWithoutPartesTrabajoInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    ciudad: string
    provincia: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RadioCreateOrConnectWithoutPartesTrabajoInput = {
    where: RadioWhereUniqueInput
    create: XOR<RadioCreateWithoutPartesTrabajoInput, RadioUncheckedCreateWithoutPartesTrabajoInput>
  }

  export type LineaParteCreateWithoutParteTrabajoInput = {
    id?: string
    horaSalida: Date | string
    horaLlegada: Date | string
    cantidad: number
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehiculo: VehiculoCreateNestedOneWithoutLineasParteInput
    material: MaterialCreateNestedOneWithoutLineasParteInput
  }

  export type LineaParteUncheckedCreateWithoutParteTrabajoInput = {
    id?: string
    horaSalida: Date | string
    horaLlegada: Date | string
    cantidad: number
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehiculoId: string
    materialId: string
  }

  export type LineaParteCreateOrConnectWithoutParteTrabajoInput = {
    where: LineaParteWhereUniqueInput
    create: XOR<LineaParteCreateWithoutParteTrabajoInput, LineaParteUncheckedCreateWithoutParteTrabajoInput>
  }

  export type LineaParteCreateManyParteTrabajoInputEnvelope = {
    data: LineaParteCreateManyParteTrabajoInput | LineaParteCreateManyParteTrabajoInput[]
    skipDuplicates?: boolean
  }

  export type ObraUpsertWithoutPartesTrabajoInput = {
    update: XOR<ObraUpdateWithoutPartesTrabajoInput, ObraUncheckedUpdateWithoutPartesTrabajoInput>
    create: XOR<ObraCreateWithoutPartesTrabajoInput, ObraUncheckedCreateWithoutPartesTrabajoInput>
    where?: ObraWhereInput
  }

  export type ObraUpdateToOneWithWhereWithoutPartesTrabajoInput = {
    where?: ObraWhereInput
    data: XOR<ObraUpdateWithoutPartesTrabajoInput, ObraUncheckedUpdateWithoutPartesTrabajoInput>
  }

  export type ObraUpdateWithoutPartesTrabajoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    codigoPostal?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutObrasNestedInput
  }

  export type ObraUncheckedUpdateWithoutPartesTrabajoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    codigoPostal?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: StringFieldUpdateOperationsInput | string
  }

  export type ConductorUpsertWithoutPartesTrabajoInput = {
    update: XOR<ConductorUpdateWithoutPartesTrabajoInput, ConductorUncheckedUpdateWithoutPartesTrabajoInput>
    create: XOR<ConductorCreateWithoutPartesTrabajoInput, ConductorUncheckedCreateWithoutPartesTrabajoInput>
    where?: ConductorWhereInput
  }

  export type ConductorUpdateToOneWithWhereWithoutPartesTrabajoInput = {
    where?: ConductorWhereInput
    data: XOR<ConductorUpdateWithoutPartesTrabajoInput, ConductorUncheckedUpdateWithoutPartesTrabajoInput>
  }

  export type ConductorUpdateWithoutPartesTrabajoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    licencia?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jornadas?: JornadaUpdateManyWithoutConductorNestedInput
  }

  export type ConductorUncheckedUpdateWithoutPartesTrabajoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    licencia?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jornadas?: JornadaUncheckedUpdateManyWithoutConductorNestedInput
  }

  export type VehiculoUpsertWithoutPartesTrabajoInput = {
    update: XOR<VehiculoUpdateWithoutPartesTrabajoInput, VehiculoUncheckedUpdateWithoutPartesTrabajoInput>
    create: XOR<VehiculoCreateWithoutPartesTrabajoInput, VehiculoUncheckedCreateWithoutPartesTrabajoInput>
    where?: VehiculoWhereInput
  }

  export type VehiculoUpdateToOneWithWhereWithoutPartesTrabajoInput = {
    where?: VehiculoWhereInput
    data: XOR<VehiculoUpdateWithoutPartesTrabajoInput, VehiculoUncheckedUpdateWithoutPartesTrabajoInput>
  }

  export type VehiculoUpdateWithoutPartesTrabajoInput = {
    id?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoVehiculoFieldUpdateOperationsInput | $Enums.TipoVehiculo
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    capacidad?: NullableFloatFieldUpdateOperationsInput | number | null
    año?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transportista?: TransportistaUpdateOneWithoutVehiculosNestedInput
    lineasParte?: LineaParteUpdateManyWithoutVehiculoNestedInput
  }

  export type VehiculoUncheckedUpdateWithoutPartesTrabajoInput = {
    id?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoVehiculoFieldUpdateOperationsInput | $Enums.TipoVehiculo
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    capacidad?: NullableFloatFieldUpdateOperationsInput | number | null
    año?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transportistaId?: NullableStringFieldUpdateOperationsInput | string | null
    lineasParte?: LineaParteUncheckedUpdateManyWithoutVehiculoNestedInput
  }

  export type RadioUpsertWithoutPartesTrabajoInput = {
    update: XOR<RadioUpdateWithoutPartesTrabajoInput, RadioUncheckedUpdateWithoutPartesTrabajoInput>
    create: XOR<RadioCreateWithoutPartesTrabajoInput, RadioUncheckedCreateWithoutPartesTrabajoInput>
    where?: RadioWhereInput
  }

  export type RadioUpdateToOneWithWhereWithoutPartesTrabajoInput = {
    where?: RadioWhereInput
    data: XOR<RadioUpdateWithoutPartesTrabajoInput, RadioUncheckedUpdateWithoutPartesTrabajoInput>
  }

  export type RadioUpdateWithoutPartesTrabajoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RadioUncheckedUpdateWithoutPartesTrabajoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LineaParteUpsertWithWhereUniqueWithoutParteTrabajoInput = {
    where: LineaParteWhereUniqueInput
    update: XOR<LineaParteUpdateWithoutParteTrabajoInput, LineaParteUncheckedUpdateWithoutParteTrabajoInput>
    create: XOR<LineaParteCreateWithoutParteTrabajoInput, LineaParteUncheckedCreateWithoutParteTrabajoInput>
  }

  export type LineaParteUpdateWithWhereUniqueWithoutParteTrabajoInput = {
    where: LineaParteWhereUniqueInput
    data: XOR<LineaParteUpdateWithoutParteTrabajoInput, LineaParteUncheckedUpdateWithoutParteTrabajoInput>
  }

  export type LineaParteUpdateManyWithWhereWithoutParteTrabajoInput = {
    where: LineaParteScalarWhereInput
    data: XOR<LineaParteUpdateManyMutationInput, LineaParteUncheckedUpdateManyWithoutParteTrabajoInput>
  }

  export type ParteDeTrabajoCreateWithoutLineasParteInput = {
    id?: string
    fecha: Date | string
    estado?: $Enums.EstadoParte
    observaciones?: string | null
    firmado?: boolean
    numeroAlbaran?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    obra: ObraCreateNestedOneWithoutPartesTrabajoInput
    conductor: ConductorCreateNestedOneWithoutPartesTrabajoInput
    vehiculo: VehiculoCreateNestedOneWithoutPartesTrabajoInput
    radio?: RadioCreateNestedOneWithoutPartesTrabajoInput
  }

  export type ParteDeTrabajoUncheckedCreateWithoutLineasParteInput = {
    id?: string
    fecha: Date | string
    estado?: $Enums.EstadoParte
    observaciones?: string | null
    firmado?: boolean
    numeroAlbaran?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    obraId: string
    conductorId: string
    vehiculoId: string
    radioId?: string | null
  }

  export type ParteDeTrabajoCreateOrConnectWithoutLineasParteInput = {
    where: ParteDeTrabajoWhereUniqueInput
    create: XOR<ParteDeTrabajoCreateWithoutLineasParteInput, ParteDeTrabajoUncheckedCreateWithoutLineasParteInput>
  }

  export type VehiculoCreateWithoutLineasParteInput = {
    id?: string
    matricula: string
    tipo: $Enums.TipoVehiculo
    marca: string
    modelo: string
    capacidad?: number | null
    año?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transportista?: TransportistaCreateNestedOneWithoutVehiculosInput
    partesTrabajo?: ParteDeTrabajoCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoUncheckedCreateWithoutLineasParteInput = {
    id?: string
    matricula: string
    tipo: $Enums.TipoVehiculo
    marca: string
    modelo: string
    capacidad?: number | null
    año?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transportistaId?: string | null
    partesTrabajo?: ParteDeTrabajoUncheckedCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoCreateOrConnectWithoutLineasParteInput = {
    where: VehiculoWhereUniqueInput
    create: XOR<VehiculoCreateWithoutLineasParteInput, VehiculoUncheckedCreateWithoutLineasParteInput>
  }

  export type MaterialCreateWithoutLineasParteInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    unidad: string
    precio?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialUncheckedCreateWithoutLineasParteInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    unidad: string
    precio?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialCreateOrConnectWithoutLineasParteInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutLineasParteInput, MaterialUncheckedCreateWithoutLineasParteInput>
  }

  export type ParteDeTrabajoUpsertWithoutLineasParteInput = {
    update: XOR<ParteDeTrabajoUpdateWithoutLineasParteInput, ParteDeTrabajoUncheckedUpdateWithoutLineasParteInput>
    create: XOR<ParteDeTrabajoCreateWithoutLineasParteInput, ParteDeTrabajoUncheckedCreateWithoutLineasParteInput>
    where?: ParteDeTrabajoWhereInput
  }

  export type ParteDeTrabajoUpdateToOneWithWhereWithoutLineasParteInput = {
    where?: ParteDeTrabajoWhereInput
    data: XOR<ParteDeTrabajoUpdateWithoutLineasParteInput, ParteDeTrabajoUncheckedUpdateWithoutLineasParteInput>
  }

  export type ParteDeTrabajoUpdateWithoutLineasParteInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoParteFieldUpdateOperationsInput | $Enums.EstadoParte
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    firmado?: BoolFieldUpdateOperationsInput | boolean
    numeroAlbaran?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    obra?: ObraUpdateOneRequiredWithoutPartesTrabajoNestedInput
    conductor?: ConductorUpdateOneRequiredWithoutPartesTrabajoNestedInput
    vehiculo?: VehiculoUpdateOneRequiredWithoutPartesTrabajoNestedInput
    radio?: RadioUpdateOneWithoutPartesTrabajoNestedInput
  }

  export type ParteDeTrabajoUncheckedUpdateWithoutLineasParteInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoParteFieldUpdateOperationsInput | $Enums.EstadoParte
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    firmado?: BoolFieldUpdateOperationsInput | boolean
    numeroAlbaran?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    obraId?: StringFieldUpdateOperationsInput | string
    conductorId?: StringFieldUpdateOperationsInput | string
    vehiculoId?: StringFieldUpdateOperationsInput | string
    radioId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VehiculoUpsertWithoutLineasParteInput = {
    update: XOR<VehiculoUpdateWithoutLineasParteInput, VehiculoUncheckedUpdateWithoutLineasParteInput>
    create: XOR<VehiculoCreateWithoutLineasParteInput, VehiculoUncheckedCreateWithoutLineasParteInput>
    where?: VehiculoWhereInput
  }

  export type VehiculoUpdateToOneWithWhereWithoutLineasParteInput = {
    where?: VehiculoWhereInput
    data: XOR<VehiculoUpdateWithoutLineasParteInput, VehiculoUncheckedUpdateWithoutLineasParteInput>
  }

  export type VehiculoUpdateWithoutLineasParteInput = {
    id?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoVehiculoFieldUpdateOperationsInput | $Enums.TipoVehiculo
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    capacidad?: NullableFloatFieldUpdateOperationsInput | number | null
    año?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transportista?: TransportistaUpdateOneWithoutVehiculosNestedInput
    partesTrabajo?: ParteDeTrabajoUpdateManyWithoutVehiculoNestedInput
  }

  export type VehiculoUncheckedUpdateWithoutLineasParteInput = {
    id?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoVehiculoFieldUpdateOperationsInput | $Enums.TipoVehiculo
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    capacidad?: NullableFloatFieldUpdateOperationsInput | number | null
    año?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transportistaId?: NullableStringFieldUpdateOperationsInput | string | null
    partesTrabajo?: ParteDeTrabajoUncheckedUpdateManyWithoutVehiculoNestedInput
  }

  export type MaterialUpsertWithoutLineasParteInput = {
    update: XOR<MaterialUpdateWithoutLineasParteInput, MaterialUncheckedUpdateWithoutLineasParteInput>
    create: XOR<MaterialCreateWithoutLineasParteInput, MaterialUncheckedCreateWithoutLineasParteInput>
    where?: MaterialWhereInput
  }

  export type MaterialUpdateToOneWithWhereWithoutLineasParteInput = {
    where?: MaterialWhereInput
    data: XOR<MaterialUpdateWithoutLineasParteInput, MaterialUncheckedUpdateWithoutLineasParteInput>
  }

  export type MaterialUpdateWithoutLineasParteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    unidad?: StringFieldUpdateOperationsInput | string
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialUncheckedUpdateWithoutLineasParteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    unidad?: StringFieldUpdateOperationsInput | string
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObraCreateManyClienteInput = {
    id?: string
    nombre: string
    direccion: string
    codigoPostal: string
    ciudad: string
    provincia: string
    estado?: string
    fechaInicio: Date | string
    fechaFin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ObraUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    codigoPostal?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partesTrabajo?: ParteDeTrabajoUpdateManyWithoutObraNestedInput
  }

  export type ObraUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    codigoPostal?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partesTrabajo?: ParteDeTrabajoUncheckedUpdateManyWithoutObraNestedInput
  }

  export type ObraUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    codigoPostal?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParteDeTrabajoCreateManyObraInput = {
    id?: string
    fecha: Date | string
    estado?: $Enums.EstadoParte
    observaciones?: string | null
    firmado?: boolean
    numeroAlbaran?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conductorId: string
    vehiculoId: string
    radioId?: string | null
  }

  export type ParteDeTrabajoUpdateWithoutObraInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoParteFieldUpdateOperationsInput | $Enums.EstadoParte
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    firmado?: BoolFieldUpdateOperationsInput | boolean
    numeroAlbaran?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conductor?: ConductorUpdateOneRequiredWithoutPartesTrabajoNestedInput
    vehiculo?: VehiculoUpdateOneRequiredWithoutPartesTrabajoNestedInput
    radio?: RadioUpdateOneWithoutPartesTrabajoNestedInput
    lineasParte?: LineaParteUpdateManyWithoutParteTrabajoNestedInput
  }

  export type ParteDeTrabajoUncheckedUpdateWithoutObraInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoParteFieldUpdateOperationsInput | $Enums.EstadoParte
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    firmado?: BoolFieldUpdateOperationsInput | boolean
    numeroAlbaran?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conductorId?: StringFieldUpdateOperationsInput | string
    vehiculoId?: StringFieldUpdateOperationsInput | string
    radioId?: NullableStringFieldUpdateOperationsInput | string | null
    lineasParte?: LineaParteUncheckedUpdateManyWithoutParteTrabajoNestedInput
  }

  export type ParteDeTrabajoUncheckedUpdateManyWithoutObraInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoParteFieldUpdateOperationsInput | $Enums.EstadoParte
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    firmado?: BoolFieldUpdateOperationsInput | boolean
    numeroAlbaran?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conductorId?: StringFieldUpdateOperationsInput | string
    vehiculoId?: StringFieldUpdateOperationsInput | string
    radioId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VehiculoCreateManyTransportistaInput = {
    id?: string
    matricula: string
    tipo: $Enums.TipoVehiculo
    marca: string
    modelo: string
    capacidad?: number | null
    año?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehiculoUpdateWithoutTransportistaInput = {
    id?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoVehiculoFieldUpdateOperationsInput | $Enums.TipoVehiculo
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    capacidad?: NullableFloatFieldUpdateOperationsInput | number | null
    año?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partesTrabajo?: ParteDeTrabajoUpdateManyWithoutVehiculoNestedInput
    lineasParte?: LineaParteUpdateManyWithoutVehiculoNestedInput
  }

  export type VehiculoUncheckedUpdateWithoutTransportistaInput = {
    id?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoVehiculoFieldUpdateOperationsInput | $Enums.TipoVehiculo
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    capacidad?: NullableFloatFieldUpdateOperationsInput | number | null
    año?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partesTrabajo?: ParteDeTrabajoUncheckedUpdateManyWithoutVehiculoNestedInput
    lineasParte?: LineaParteUncheckedUpdateManyWithoutVehiculoNestedInput
  }

  export type VehiculoUncheckedUpdateManyWithoutTransportistaInput = {
    id?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoVehiculoFieldUpdateOperationsInput | $Enums.TipoVehiculo
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    capacidad?: NullableFloatFieldUpdateOperationsInput | number | null
    año?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParteDeTrabajoCreateManyVehiculoInput = {
    id?: string
    fecha: Date | string
    estado?: $Enums.EstadoParte
    observaciones?: string | null
    firmado?: boolean
    numeroAlbaran?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    obraId: string
    conductorId: string
    radioId?: string | null
  }

  export type LineaParteCreateManyVehiculoInput = {
    id?: string
    horaSalida: Date | string
    horaLlegada: Date | string
    cantidad: number
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parteTrabajoId: string
    materialId: string
  }

  export type ParteDeTrabajoUpdateWithoutVehiculoInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoParteFieldUpdateOperationsInput | $Enums.EstadoParte
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    firmado?: BoolFieldUpdateOperationsInput | boolean
    numeroAlbaran?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    obra?: ObraUpdateOneRequiredWithoutPartesTrabajoNestedInput
    conductor?: ConductorUpdateOneRequiredWithoutPartesTrabajoNestedInput
    radio?: RadioUpdateOneWithoutPartesTrabajoNestedInput
    lineasParte?: LineaParteUpdateManyWithoutParteTrabajoNestedInput
  }

  export type ParteDeTrabajoUncheckedUpdateWithoutVehiculoInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoParteFieldUpdateOperationsInput | $Enums.EstadoParte
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    firmado?: BoolFieldUpdateOperationsInput | boolean
    numeroAlbaran?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    obraId?: StringFieldUpdateOperationsInput | string
    conductorId?: StringFieldUpdateOperationsInput | string
    radioId?: NullableStringFieldUpdateOperationsInput | string | null
    lineasParte?: LineaParteUncheckedUpdateManyWithoutParteTrabajoNestedInput
  }

  export type ParteDeTrabajoUncheckedUpdateManyWithoutVehiculoInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoParteFieldUpdateOperationsInput | $Enums.EstadoParte
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    firmado?: BoolFieldUpdateOperationsInput | boolean
    numeroAlbaran?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    obraId?: StringFieldUpdateOperationsInput | string
    conductorId?: StringFieldUpdateOperationsInput | string
    radioId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LineaParteUpdateWithoutVehiculoInput = {
    id?: StringFieldUpdateOperationsInput | string
    horaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    horaLlegada?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: FloatFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parteTrabajo?: ParteDeTrabajoUpdateOneRequiredWithoutLineasParteNestedInput
    material?: MaterialUpdateOneRequiredWithoutLineasParteNestedInput
  }

  export type LineaParteUncheckedUpdateWithoutVehiculoInput = {
    id?: StringFieldUpdateOperationsInput | string
    horaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    horaLlegada?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: FloatFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parteTrabajoId?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
  }

  export type LineaParteUncheckedUpdateManyWithoutVehiculoInput = {
    id?: StringFieldUpdateOperationsInput | string
    horaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    horaLlegada?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: FloatFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parteTrabajoId?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
  }

  export type ParteDeTrabajoCreateManyConductorInput = {
    id?: string
    fecha: Date | string
    estado?: $Enums.EstadoParte
    observaciones?: string | null
    firmado?: boolean
    numeroAlbaran?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    obraId: string
    vehiculoId: string
    radioId?: string | null
  }

  export type JornadaCreateManyConductorInput = {
    id?: string
    fecha: Date | string
    horaInicio: Date | string
    horaFin: Date | string
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParteDeTrabajoUpdateWithoutConductorInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoParteFieldUpdateOperationsInput | $Enums.EstadoParte
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    firmado?: BoolFieldUpdateOperationsInput | boolean
    numeroAlbaran?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    obra?: ObraUpdateOneRequiredWithoutPartesTrabajoNestedInput
    vehiculo?: VehiculoUpdateOneRequiredWithoutPartesTrabajoNestedInput
    radio?: RadioUpdateOneWithoutPartesTrabajoNestedInput
    lineasParte?: LineaParteUpdateManyWithoutParteTrabajoNestedInput
  }

  export type ParteDeTrabajoUncheckedUpdateWithoutConductorInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoParteFieldUpdateOperationsInput | $Enums.EstadoParte
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    firmado?: BoolFieldUpdateOperationsInput | boolean
    numeroAlbaran?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    obraId?: StringFieldUpdateOperationsInput | string
    vehiculoId?: StringFieldUpdateOperationsInput | string
    radioId?: NullableStringFieldUpdateOperationsInput | string | null
    lineasParte?: LineaParteUncheckedUpdateManyWithoutParteTrabajoNestedInput
  }

  export type ParteDeTrabajoUncheckedUpdateManyWithoutConductorInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoParteFieldUpdateOperationsInput | $Enums.EstadoParte
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    firmado?: BoolFieldUpdateOperationsInput | boolean
    numeroAlbaran?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    obraId?: StringFieldUpdateOperationsInput | string
    vehiculoId?: StringFieldUpdateOperationsInput | string
    radioId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JornadaUpdateWithoutConductorInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JornadaUncheckedUpdateWithoutConductorInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JornadaUncheckedUpdateManyWithoutConductorInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LineaParteCreateManyMaterialInput = {
    id?: string
    horaSalida: Date | string
    horaLlegada: Date | string
    cantidad: number
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parteTrabajoId: string
    vehiculoId: string
  }

  export type LineaParteUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    horaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    horaLlegada?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: FloatFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parteTrabajo?: ParteDeTrabajoUpdateOneRequiredWithoutLineasParteNestedInput
    vehiculo?: VehiculoUpdateOneRequiredWithoutLineasParteNestedInput
  }

  export type LineaParteUncheckedUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    horaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    horaLlegada?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: FloatFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parteTrabajoId?: StringFieldUpdateOperationsInput | string
    vehiculoId?: StringFieldUpdateOperationsInput | string
  }

  export type LineaParteUncheckedUpdateManyWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    horaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    horaLlegada?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: FloatFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parteTrabajoId?: StringFieldUpdateOperationsInput | string
    vehiculoId?: StringFieldUpdateOperationsInput | string
  }

  export type ParteDeTrabajoCreateManyRadioInput = {
    id?: string
    fecha: Date | string
    estado?: $Enums.EstadoParte
    observaciones?: string | null
    firmado?: boolean
    numeroAlbaran?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    obraId: string
    conductorId: string
    vehiculoId: string
  }

  export type ParteDeTrabajoUpdateWithoutRadioInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoParteFieldUpdateOperationsInput | $Enums.EstadoParte
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    firmado?: BoolFieldUpdateOperationsInput | boolean
    numeroAlbaran?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    obra?: ObraUpdateOneRequiredWithoutPartesTrabajoNestedInput
    conductor?: ConductorUpdateOneRequiredWithoutPartesTrabajoNestedInput
    vehiculo?: VehiculoUpdateOneRequiredWithoutPartesTrabajoNestedInput
    lineasParte?: LineaParteUpdateManyWithoutParteTrabajoNestedInput
  }

  export type ParteDeTrabajoUncheckedUpdateWithoutRadioInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoParteFieldUpdateOperationsInput | $Enums.EstadoParte
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    firmado?: BoolFieldUpdateOperationsInput | boolean
    numeroAlbaran?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    obraId?: StringFieldUpdateOperationsInput | string
    conductorId?: StringFieldUpdateOperationsInput | string
    vehiculoId?: StringFieldUpdateOperationsInput | string
    lineasParte?: LineaParteUncheckedUpdateManyWithoutParteTrabajoNestedInput
  }

  export type ParteDeTrabajoUncheckedUpdateManyWithoutRadioInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoParteFieldUpdateOperationsInput | $Enums.EstadoParte
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    firmado?: BoolFieldUpdateOperationsInput | boolean
    numeroAlbaran?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    obraId?: StringFieldUpdateOperationsInput | string
    conductorId?: StringFieldUpdateOperationsInput | string
    vehiculoId?: StringFieldUpdateOperationsInput | string
  }

  export type LineaParteCreateManyParteTrabajoInput = {
    id?: string
    horaSalida: Date | string
    horaLlegada: Date | string
    cantidad: number
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehiculoId: string
    materialId: string
  }

  export type LineaParteUpdateWithoutParteTrabajoInput = {
    id?: StringFieldUpdateOperationsInput | string
    horaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    horaLlegada?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: FloatFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehiculo?: VehiculoUpdateOneRequiredWithoutLineasParteNestedInput
    material?: MaterialUpdateOneRequiredWithoutLineasParteNestedInput
  }

  export type LineaParteUncheckedUpdateWithoutParteTrabajoInput = {
    id?: StringFieldUpdateOperationsInput | string
    horaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    horaLlegada?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: FloatFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehiculoId?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
  }

  export type LineaParteUncheckedUpdateManyWithoutParteTrabajoInput = {
    id?: StringFieldUpdateOperationsInput | string
    horaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    horaLlegada?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: FloatFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehiculoId?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}