import { Injectable } from '@angular/core';

export interface IUser {
  login: string;
  password: string;
}

export interface IDataWork {
  workName: string;
  dataFact: number;
  dataModel: number;
}

export interface IParameter {
  name: string;
  works: IDataWork[];
}

export interface IStatistics {
  str: string;
  workName: string;
  totality: string;
  inWork: string;
  completed: string;
  percent: number;
}

export interface ICell {
  priority: number;
}

export interface IColumn {
  column: ICell[];
  percentData: number;
}

export interface IFullStatistics {
  str: string;
  material: string;
  quantityMaterial: string;
  quantityCumulatively: string;
  percentBar: number;
  percentCircle: number;
  usedMaterial: string;
  table: IColumn[];
}


@Injectable()
export class DataService {
  constructor() {}
  public users: IUser[] = [
    {
      login: 'Victor',
      password: 'Victor1'
    },
    {
      login: 'Peter',
      password: '123'
    },
    {
      login: 'Max',
      password: 'Max12'
    },
    {
      login: 'Jon',
      password: '111'
    }
    ];
  public dataParameters: IParameter[] = [
    {
      name: 'Сырьё',
      works: [
        {
          workName: 'Загрузка печи по продукту',
          dataFact: 224.9,
          dataModel: 224.9
        },
        {
          workName: 'Температура продукта на входе в печь',
          dataFact: 224.9,
          dataModel: 224.9
        },
        {
          workName: 'Температура продукта на выходе из печи',
          dataFact: 224.9,
          dataModel: 224.9
        },
        {
          workName: 'Доля отгона сырья',
          dataFact: 224.9,
          dataModel: 224.9
        }
        ]
    },
    {
      name: 'Топливо газообразное',
      works: [
        {
          workName: 'Загрузка печи по продукту',
          dataFact: 224.9,
          dataModel: 224.9
        },
        {
          workName: 'Температура продукта на входе в печь',
          dataFact: 224.9,
          dataModel: 224.9
        },
        {
          workName: 'Температура продукта на выходе из печи',
          dataFact: 224.9,
          dataModel: 224.9
        },
        {
          workName: 'Доля отгона сырья',
          dataFact: 224.9,
          dataModel: 224.9
        }
      ]
    },
    {
      name: 'Жидкое топливо',
      works: [
        {
          workName: 'Загрузка печи по продукту',
          dataFact: 224.9,
          dataModel: 224.9
        },
        {
          workName: 'Температура продукта на входе в печь',
          dataFact: 224.9,
          dataModel: 224.9
        },
        {
          workName: 'Температура продукта на выходе из печи',
          dataFact: 224.9,
          dataModel: 224.9
        },
        {
          workName: 'Доля отгона сырья',
          dataFact: 224.9,
          dataModel: 224.9
        }
      ]
    },
    {
      name: 'Дымовые газы',
      works: [
        {
          workName: 'Загрузка печи по продукту',
          dataFact: 224.9,
          dataModel: 224.9
        },
        {
          workName: 'Температура продукта на входе в печь',
          dataFact: 224.9,
          dataModel: 224.9
        },
        {
          workName: 'Температура продукта на выходе из печи',
          dataFact: 224.9,
          dataModel: 224.9
        },
        {
          workName: 'Доля отгона сырья',
          dataFact: 224.9,
          dataModel: 224.9
        }
      ]
    },
    {
      name: 'Воздух',
      works: [
        {
          workName: 'Температура воздуха на горение в печи',
          dataFact: 224.9,
          dataModel: 225.9
        },
        {
          workName: 'Коэффициент избытка воздуха',
          dataFact: 224.9,
          dataModel: 224.9
        }
      ]
    }
  ];
  public statistics: IStatistics[] = [
    {
    str: 'тн',
    workName: 'Выработка',
    totality: '30 094',
    inWork: '31 265',
    completed: '-1 171',
    percent: 0.9
  },
    {
      str: 'тн',
      workName: 'План переработки',
      totality: '33 994',
      inWork: '36 859',
      completed: '-2 865',
      percent: 0.9
    }
  ];
  public fullStatistics: IFullStatistics = {
    str: 'тн',
    material: 'Гудрон',
    quantityMaterial: '1 049',
    quantityCumulatively: '9 517',
    percentBar: 81,
    percentCircle: 0.95,
    usedMaterial: '0',
    table: [
      {
        column: [{priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0},
          {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}],
        percentData: 0.5
      },
      {
        column: [{priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0},
          {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}],
        percentData: 0.5
      },
      {
        column: [{priority: 2}, {priority: 2}, {priority: 2}, {priority: 2}, {priority: 2}, {priority: 2}, {priority: 2}, {priority: 2},
          {priority: 2}, {priority: 2}, {priority: 2}, {priority: 2}, {priority: 2}, {priority: 2}, {priority: 3}, {priority: 3},
          {priority: 3}, {priority: 3}],
        percentData: 0.66
      },
      {
        column: [{priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0},
          {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}],
        percentData: 0.6
      },
      {
        column: [{priority: 1}, {priority: 1}, {priority: 1}, {priority: 1}, {priority: 1}, {priority: 1}, {priority: 1}, {priority: 1},
          {priority: 1}, {priority: 1}, {priority: 1}, {priority: 2}, {priority: 2}, {priority: 2}, {priority: 2}, {priority: 2}],
        percentData: 0.5
      },
      {
        column: [{priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0},
          {priority: 0}],
        percentData: 0.4
      },
      {
        column: [{priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0},
          {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}],
        percentData: 0.5
      },
      {
        column: [{priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0},
          {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}],
        percentData: 0.5
      },
      {
        column: [{priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0},
          {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}],
        percentData: 0.7
      },
      {
        column: [{priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0},
          {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}],
        percentData: 0.6
      },
      {
        column: [{priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0},
          {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}],
        percentData: 0.5
      },
      {
        column: [{priority: 2}, {priority: 2}, {priority: 2}, {priority: 2}, {priority: 2}, {priority: 2}, {priority: 2}, {priority: 2},
          {priority: 2}, {priority: 2}, {priority: 2}, {priority: 2}, {priority: 2}, {priority: 2}, {priority: 3}, {priority: 3},
          {priority: 3}, {priority: 3}],
        percentData: 0.7
      },
      {
        column: [{priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0},
          {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}],
        percentData: 0.7
      },
      {
        column: [{priority: 1}, {priority: 1}, {priority: 1}, {priority: 1}, {priority: 1}, {priority: 1}, {priority: 1}, {priority: 1},
          {priority: 1}, {priority: 1}, {priority: 1}, {priority: 2}, {priority: 2}, {priority: 2}, {priority: 2}, {priority: 2}],
        percentData: 0.5
      },
      {
        column: [{priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0},
          {priority: 0}],
        percentData: 0.5
      },
      {
        column: [{priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0},
          {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}],
        percentData: 0.55
      },
      {
        column: [{priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0},
          {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}],
        percentData: 0.55
      },
      {
        column: [{priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0},
          {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}],
        percentData: 0.5
      },
      {
        column: [{priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0},
          {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}],
        percentData: 0.52
      },
      {
        column: [{priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0},
          {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}],
        percentData: 0.6
      },
      {
        column: [{priority: 2}, {priority: 2}, {priority: 2}, {priority: 2}, {priority: 2}, {priority: 2}, {priority: 2}, {priority: 2},
          {priority: 2}, {priority: 2}, {priority: 2}, {priority: 2}, {priority: 2}, {priority: 2}, {priority: 3}, {priority: 3},
          {priority: 3}, {priority: 3}],
        percentData: 0.6
      },
      {
        column: [{priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0},
          {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}],
        percentData: 0.59
      },
      {
        column: [{priority: 1}, {priority: 1}, {priority: 1}, {priority: 1}, {priority: 1}, {priority: 1}, {priority: 1}, {priority: 1},
          {priority: 1}, {priority: 1}, {priority: 1}, {priority: 2}, {priority: 2}, {priority: 2}, {priority: 2}, {priority: 2}],
        percentData: 0.51
      },
      {
        column: [{priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0},
          {priority: 0}],
        percentData: 0.52
      },
      {
        column: [{priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0},
          {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}],
        percentData: 0.54
      },
      {
        column: [{priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0},
          {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}],
        percentData: 0.52
      },
      {
        column: [{priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0},
          {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}],
        percentData: 0.8
      },
      {
        column: [{priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0},
          {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}],
        percentData: 0.2
      },
      {
        column: [{priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0},
          {priority: 0}, {priority: 0}, {priority: 0}, {priority: 0}],
        percentData: 0.5
      },
      {
        column: [{priority: 2}, {priority: 2}, {priority: 2}, {priority: 2}, {priority: 2}, {priority: 2}, {priority: 2}, {priority: 2},
          {priority: 2}, {priority: 2}, {priority: 2}, {priority: 2}, {priority: 2}, {priority: 2}, {priority: 3}, {priority: 3},
          {priority: 3}, {priority: 3}],
        percentData: 0.3
      }
    ]
  };
  public isLoggedIn: boolean = false;
  public buttonSelect: number;
  public isLogged(login: string, password: string): boolean{
    if (this.users.some(elem => (elem.login === login) && (elem.password === password)) && login !== '' && password !== ''){
      return true;
    }
    return false;
  }
}
