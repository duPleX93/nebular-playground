import {Component} from '@angular/core';

interface TreeNode<T> {
    data: T;
    children?: TreeNode<T>[];
    expanded?: boolean;
}

interface FSEntry {
    id: number;
    name: string;
    walletStatus: string;
    featured?: boolean;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

    allColumns = ['id', 'name', 'walletStatus', 'featured'];

    data: TreeNode<FSEntry>[] = [
        {
            data: {id: 1, name: 'Péter', walletStatus: 'Active', featured: true},
        },
        {
            data: {id: 2, name: 'Kinga', walletStatus: 'Active', featured: false},
        },
        {
            data: {id: 3, name: 'Botond', walletStatus: 'Inactive'},
        },
    ];
}
