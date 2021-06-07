import { Injectable } from '@angular/core';

export interface IPostData {
  subcategory: string;
  installation: string;
  date: string;
  title: string;
  text: string;
  status: string;
  src: string;
  priority: number;
  state: string;
}

export interface IFilterBlockData {
  subcategory: string;
  src: string;
  leftNumber: number;
  rightNumber: number;
}

export interface IAllFilters {
  installationFilterValue: string;
  priorityFilterValue: number;
  searchFilterValue: string;
  statusFilterValue: string;
  subcategoryFiltersValue: string[];
}

export interface Istatus {
  status: string;
  count: number;
}

@Injectable()
export class DataService {
  constructor() {
    this.fillStatusBlock();
  }
  public postData: IPostData[] = [
    {
      subcategory: 'СМОТР',
      installation: 'ГФУ-2',
      date: '16.07.2020 13:00',
      title: 'Температура верха',
      text: 'Количество выключений: 10',
      status: 'Новое',
      src: 'assets/gear.svg',
      priority: 1,
      state: 'Не квитировано'
    },
    {
      subcategory: 'СМОТР',
      installation: 'ГФУ-2',
      date: '16.07.2020 13:00',
      title: 'КПЭ по качеству',
      text: 'Количество выключений: 10',
      status: 'Завершено',
      src: 'assets/gear.svg',
      priority: 2,
      state: 'Квитировано'
    },
    {
      subcategory: 'Безопасность',
      installation: 'ГФУ-3',
      date: '16.07.2020 13:00',
      title: 'Событие Приема-Передачи смены',
      text: 'Количество выключений: 10',
      status: 'В работе',
      src: 'assets/shield.svg',
      priority: 3,
      state: 'Не квитировано'
    },
    {
      subcategory: 'Производственные задания и распоряжения',
      installation: 'АВТ-10',
      date: '16.07.2020 13:00',
      title: 'КПЭ по качеству',
      text: 'Количество выключений: 10',
      status: 'Новое',
      src: 'assets/graph.svg',
      priority: 2,
      state: 'Не квитировано'
    },
    {
      subcategory: 'Состояние оборудования и отказы',
      installation: 'АВТ-11',
      date: '16.07.2020 13:00',
      title: 'Температура верха',
      text: 'Количество выключений: 10',
      status: 'В работе',
      src: 'assets/screwdriver.svg',
      priority: 1,
      state: 'Квитировано'
    },
    {
      subcategory: 'Сбросы',
      installation: 'ГФУ-5',
      date: '16.07.2020 13:00',
      title: 'Событие Приема-Передачи смены',
      text: 'Количество выключений: 10',
      status: 'Завершено',
      src: 'assets/arrow.svg',
      priority: 1,
      state: 'Не квитировано'
    },
    {
      subcategory: 'Сбросы',
      installation: 'ГФУ-2',
      date: '16.07.2020 13:00',
      title: 'Температура верха',
      text: 'Количество выключений: 10',
      status: 'Новое',
      src: 'assets/arrow.svg',
      priority: 3,
      state: 'Квитировано'
    },
    {
      subcategory: 'Безопасность',
      installation: 'ГФУ-1',
      date: '16.07.2020 13:00',
      title: 'КПЭ по качеству',
      text: 'Количество выключений: 10',
      status: 'В работе',
      src: 'assets/shield.svg',
      priority: 1,
      state: 'Квитировано'
    },
    {
      subcategory: 'Производственные задания и распоряжения',
      installation: 'ГФУ-2',
      date: '16.07.2020 13:00',
      title: 'Температура верха',
      text: 'Количество выключений: 10',
      status: 'Новое',
      src: 'assets/graph.svg',
      priority: 2,
      state: 'Не квитировано'
    },
    {
      subcategory: 'Состояние оборудования и отказы',
      installation: 'ГФУ-2',
      date: '16.07.2020 13:00',
      title: 'Температура верха',
      text: 'Количество выключений: 10',
      status: 'Завершено',
      src: 'assets/screwdriver.svg',
      priority: 3,
      state: 'Не квитировано'
    }
  ];
  public filterBlockData: IFilterBlockData[] = [
    {
      subcategory: 'СМОТР',
      src: 'assets/gear.svg',
      leftNumber: 3,
      rightNumber: 4
    },
    {
      subcategory: 'Безопасность',
      src: 'assets/shield.svg',
      leftNumber: 3,
      rightNumber: 4
    },
    {
      subcategory: 'Производственные задания и распоряжения',
      src: 'assets/graph.svg',
      leftNumber: 3,
      rightNumber: 4
    },
    {
      subcategory: 'Состояние оборудования и отказы',
      src: 'assets/screwdriver.svg',
      leftNumber: 3,
      rightNumber: 4
    },
    {
      subcategory: 'Сбросы',
      src: 'assets/arrow.svg',
      leftNumber: 3,
      rightNumber: 4
    }
  ];
  public allFilters: IAllFilters = {
    installationFilterValue: 'Выбрать все',
    priorityFilterValue: 0,
    searchFilterValue: '',
    statusFilterValue: 'Все',
    subcategoryFiltersValue: []
  };
  public statusBlock: Istatus[] = [
    {
      status: 'Все',
      count: 0
    },
    {
      status: 'Новое',
      count: 0
    },
    {
      status: 'Отработано',
      count: 0
    },
    {
      status: 'В работе',
      count: 0
    },
    {
      status: 'Не квитировано',
      count: 0
    }
  ];
  public dropMenuItems1: string[] = this.fillDropMenuItems();
  public dropMenuItems2: string[] = ['Выбрать все', 'Высокий', 'Средний', 'Стандартный'];
  private fillStatusBlock(): void{
    this.statusBlock[0].count = this.postData.length;
    for (const item of this.postData){
      switch (item.status){
        case 'Новое': this.statusBlock[1].count++; break;
        case 'Завершено': this.statusBlock[2].count++; break;
        case 'В работе': this.statusBlock[3].count++; break;
      }
      if (item.state === 'Не квитировано'){
        this.statusBlock[4].count++;
      }
    }
  }
  public fillDropMenuItems(): string[]{
    const installation: Set<string> = new Set<string>(this.postData.map(item => item.installation).sort());
    return ['Выбрать все', ...installation];
  }

  public updateStatusBlock(elem: IPostData): void{
    this.statusBlock[0].count = this.postData.length;
    switch (elem.status){
      case 'Новое': this.statusBlock[1].count--; break;
      case 'Завершено': this.statusBlock[2].count--; break;
      case 'В работе': this.statusBlock[3].count--; break;
    }
    if (elem.state === 'Не квитировано'){
        this.statusBlock[4].count--;
    }
  }
}
