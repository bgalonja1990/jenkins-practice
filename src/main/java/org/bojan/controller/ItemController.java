package org.bojan.controller;

import java.util.List;

import org.bojan.model.Item;
import org.bojan.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/items")
public class ItemController {
	
	@Autowired
	ItemRepository itemRepository;
	
	@RequestMapping(method=RequestMethod.GET)
	public List<Item> getItems(){
		return itemRepository.findAll();
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public Item saveItem(@RequestBody Item item){
		item.setId(null);
		return itemRepository.saveAndFlush(item);
	}
	
	@RequestMapping(value="/{id}", method=RequestMethod.PUT)
	public Item updateItem(@RequestBody Item item,@PathVariable("id") Integer id){
		item.setId(id);
		return itemRepository.saveAndFlush(item);
	}
	
	@RequestMapping(value="/{id}")
	public Item getItem(@PathVariable("id") Integer id){
		
		return itemRepository.findOne(id);
		
	}
	
	@RequestMapping(value="/{id}", method=RequestMethod.DELETE)
	public void delete(@PathVariable("id") Integer id){
		itemRepository.delete(id);
		
	}
	
	
	
}
