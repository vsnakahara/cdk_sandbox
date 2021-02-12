import { ListRange } from "@angular/cdk/collections";
import { Portal, TemplatePortal } from "@angular/cdk/portal";
import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";
import { AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef } from "@angular/core";
import { ListService } from './list.service';
import { PokemonList } from './pokemon';

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements AfterViewInit {
  @ViewChild('templatePortalContent') templatePortalContent: TemplateRef<unknown>;

  @ViewChild(CdkVirtualScrollViewport) vsv: CdkVirtualScrollViewport;

  selectedPortal: Portal<any>;
  templatePortal: TemplatePortal<any>;
  
  list: PokemonList;

  selectedPokemon: any;

  constructor(private service: ListService, private _viewContainerRef: ViewContainerRef) {
    this.service.getPokemons().subscribe((item) => this.list = item);    
  }

  ngAfterViewInit() {
    this.templatePortal = new TemplatePortal(
      this.templatePortalContent,
      this._viewContainerRef
    );

    this.vsv.scrolledIndexChange.subscribe((n: number) => 
            console.log(n));
    this.vsv.renderedRangeStream.subscribe((ls: ListRange) => 
            console.log(ls.start,ls.end));
  }

  getPokemon(url: string) {
    this.service.getPokemon(url).subscribe((item) => {
      this.selectedPokemon = item;
      this.selectedPortal = this.templatePortal;
    });
  }

  watchIndex($event) {
    console.log($event)
  }

}
